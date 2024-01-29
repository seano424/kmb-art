import {PresentationIcon} from '@sanity/icons'
import {Rule} from 'sanity'

const featuredImage = {
  title: 'Homepage Featured Image',
  name: 'featuredImage',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'featureImage',
      title: 'Feature Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featureImage',
    },
  },
}

export default featuredImage
