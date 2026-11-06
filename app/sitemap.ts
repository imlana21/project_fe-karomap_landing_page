import type { MetadataRoute } from "next";
import { cacheLife } from "next/cache";
import { connection } from "next/server";
import api from "@/lib/api";
import { siteConfig } from "@/stores/static/config";

async function sitemapEntries(): Promise<MetadataRoute.Sitemap> {
  "use cache";
  cacheLife("hours");

  const entries: MetadataRoute.Sitemap = [
    "",
    "/contact",
    "/solusi/management-data-spasial",
    "/blog",
  ].map((path) => ({ url: `${siteConfig.url}${path}` }));

  const slugs = new Set<string>();
  let offset = 0;

  do {
    const { data } = await api.get<unknown>("post/", {
      params: { limit: 100, offset, type: "blogs" },
    });
    if (
      !data ||
      typeof data !== "object" ||
      !("results" in data) ||
      !Array.isArray(data.results) ||
      !("count" in data) ||
      typeof data.count !== "number" ||
      !Number.isSafeInteger(data.count) ||
      data.count < 0 ||
      data.count > 49996 ||
      !("next" in data) ||
      (data.next !== null && typeof data.next !== "string")
    ) {
      throw new Error("Invalid sitemap blog response");
    }
    if (!data.results.length && (data.next || offset < data.count)) {
      throw new Error("Incomplete sitemap blog pagination");
    }
    for (const post of data.results) {
      if (!post || typeof post !== "object" || typeof post.slug !== "string") {
        throw new Error("Invalid sitemap blog entry");
      }
      if (post.published !== true || post.deleted_at || post.type !== "blogs")
        continue;
      if (
        !post.slug ||
        post.slug === "." ||
        post.slug === ".." ||
        /[/?#\\]/.test(post.slug)
      ) {
        throw new Error("Invalid sitemap blog slug");
      }
      if (slugs.has(post.slug)) continue;
      slugs.add(post.slug);
      const date = [post.updated_at, post.published_at].find(
        (value) =>
          typeof value === "string" && Number.isFinite(Date.parse(value)),
      );
      entries.push({
        url: `${siteConfig.url}/blog/${encodeURIComponent(post.slug)}`,
        ...(date ? { lastModified: new Date(date).toISOString() } : {}),
      });
    }
    offset += data.results.length;
    if (!data.next) {
      if (offset < data.count)
        throw new Error("Incomplete sitemap blog pagination");
      break;
    }
    if (offset >= data.count)
      throw new Error("Invalid sitemap blog pagination");
  } while (true);

  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection();
  return sitemapEntries();
}
