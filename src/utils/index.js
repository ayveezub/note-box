import { getCollection } from 'astro:content'

const getNotes = async () => {
  return await getCollection('notes', ({ data }) => {
    return !data.draft && data.tags.length > 0
  })
}

export { getNotes }
