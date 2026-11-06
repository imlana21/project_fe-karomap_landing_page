import sanitizeHtml from "sanitize-html";

export function mediaUrl(value: string): string {
  return value.startsWith("/media/") || value.startsWith("media/")
    ? new URL(value, "https://www.karomap.com/").href
    : value;
}

export function blogText(html: string): string {
  let text = "";
  sanitizeHtml(html, {
    allowedTags: [], allowedAttributes: {},
    textFilter: (value) => { text += value; return value; },
    exclusiveFilter: (frame) => { if (["p", "div", "br", "li", "h2", "h3"].includes(frame.tag)) text += " "; return false; },
  });
  return text.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

export function sanitizeBlogHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, "img"],
    allowedAttributes: {
      a: ["href", "title"],
      img: ["src", "alt", "width", "height", "loading"],
      th: ["colspan", "rowspan", "scope"],
      td: ["colspan", "rowspan"],
    },
    allowedSchemes: ["https", "http", "mailto", "tel"],
    allowedSchemesByTag: { img: ["https", "http", "data"] },
    allowProtocolRelative: false,
    transformTags: {
      img: (_tag, attributes) => {
        const src = mediaUrl(attributes.src ?? "");
        // ponytail: allow embedded raster images only; SVG needs a separate sanitizer.
        const safe = !src.startsWith("data:") || /^data:image\/(?:png|jpe?g|gif|webp);base64,[a-z0-9+/=\s]+$/i.test(src);
        return { tagName: "img", attribs: { ...attributes, src: safe ? src : "", loading: "lazy", alt: attributes.alt ?? "" } };
      },
      a: (_tag, attributes) => ({ tagName: "a", attribs: { ...attributes, href: mediaUrl(attributes.href ?? "") } }),
    },
  });
}
