import { ImagesIcon } from '@sanity/icons'
import { Rule } from 'sanity'

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
      name: 'artSeries',
      title: 'Art Series',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'art-work' }],
          weak: true
        },
      ],
      validation: (Rule: Rule) => Rule.max(3),
    },
  ],
}

export default homepageImages
