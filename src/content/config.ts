import { defineCollection, z } from 'astro:content';

// Logs Schema
const logs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    growthStage: z.enum(['seedling', 'budding', 'evergreen']),
    description: z.string().optional(),
  }),
});

// JSON Lists Schema (Uses & Media Log)
const lists = defineCollection({
  type: 'data',
  schema: z.union([
    z.object({
      type: z.literal('uses'),
      items: z.array(
        z.object({
          name: z.string(),
          category: z.string(),
          description: z.string(),
          url: z.string().optional(),
        })
      ),
    }),
    z.object({
      type: z.literal('media'),
      items: z.array(
        z.object({
          title: z.string(),
          author: z.string(),
          type: z.enum(['book', 'article', 'video', 'podcast', 'other']),
          status: z.enum(['reading', 'completed', 'backlog']),
          takeaway: z.string().optional(),
          url: z.string().optional(),
        })
      ),
    }),
  ]),
});

export const collections = {
  logs,
  lists,
};
