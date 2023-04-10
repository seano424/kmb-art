import { ImagesIcon } from '@sanity/icons'

const homepageImages = {
  name: 'homepageImages',
  title: 'Homepage Images',
  icon: ImagesIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'images' }],
      validation: (Rule) => Rule.required().min(3).max(3),
    },
  ],
}

export default homepageImages
