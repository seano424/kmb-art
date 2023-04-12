import { ImagesIcon } from '@sanity/icons'
import { Rule } from 'sanity'

const homepageSeries = {
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
          weak: true
        },
      ],
      validation: (Rule: Rule) => Rule.max(3),
    },
  ],
}

export default homepageSeries
