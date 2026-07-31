import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const notes = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './content',
    generateId: ({ entry }) => entry.split('/').at(-1) ?? '',
  }),
  schema: z.object({
    title: z.string().trim(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
})

export const collections = { notes }
