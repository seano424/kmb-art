import { ImagesIcon } from '@sanity/icons'
import { Rule } from 'sanity'

const homepageImages = {
  name: 'homepageSeries',
  title: 'Homepage Series',
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
          to: [{ type: 'art' }],
        },
      ],
      validation: (Rule: Rule) => Rule.max(3),
    },
  ],
}

export default homepageImages
