import { cache } from "react";
import { connection } from "next/server";
import api from "@/lib/api";
import type { ApiEnvelope } from "@/stores/types/Api";
import type { BlogPost } from "@/stores/types/BlogPost";

export const PAGE_SIZE = 6;
export function blogPage(value: string | string[] | undefined): number {
  const page = typeof value === "string" && /^[1-9]\d*$/.test(value) ? Number(value) : 1;
  return Number.isSafeInteger(page * PAGE_SIZE) ? page : 1;
}

export const getBlogPage = cache(async (limit: number, offset: number) => {
  await connection();
  const { data } = await api.get<ApiEnvelope<BlogPost>>("post/", { params: { limit, offset, type: "blogs" } });
  if (!Array.isArray(data.results) || !Number.isSafeInteger(data.count) || data.count < 0 ||
      (data.next && !data.results.length) || data.results.some((post) =>
        typeof post.slug !== "string" || typeof post.title !== "string" || typeof post.body !== "string" ||
        typeof post.description !== "string" || typeof post.featured_image !== "string" ||
        !post.author || !Array.isArray(post.categories) || !Array.isArray(post.tags))) {
    throw new Error("Invalid blog API response");
  }
  return { ...data, results: data.results.filter((post) => post.published && post.type === "blogs"), received: data.results.length };
});

export const getArticle = cache(async (slug: string) => {
  const posts: BlogPost[] = [];
  let offset = 0;
  // ponytail: verified API ignores slug filters; stop once found until a detail endpoint exists.
  while (true) {
    const data = await getBlogPage(PAGE_SIZE, offset);
    posts.push(...data.results);
    const post = posts.find((item) => item.slug === slug);
    if (post) return { post, posts };
    offset += data.received;
    if (!data.next || offset >= data.count) return { post: undefined, posts };
  }
});
