import { PresentationIcon } from '@sanity/icons'

const art = {
  title: 'Art',
  name: 'art',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Ink Works', value: 'ink-works' },
          { title: 'Paintings', value: 'paintings' },
          { title: 'Charcoals', value: 'charcoals' },
        ],
        layout: 'dropdown',
      },
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
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'images' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featureImage',
    },
  },
}

export default art
