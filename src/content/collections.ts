import { defineCollection, z } from "astro:content";

export const projectCollection = defineCollection({
  schema: ({ image }) =>
    z
      .object({
        id: z.string(),
        title: z.string(),
        url: z.string(),
        aria: z.string(),
        view: z.string(),
        bgMobile: image(),
        bgTablet: image(),
        bgDesktop: image(),
        isHero: z.boolean().default(false),
        isDraft: z.boolean().default(false),
      })
      .strict(),
  type: "content",
});
