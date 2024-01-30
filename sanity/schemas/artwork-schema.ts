import { PresentationIcon } from '@sanity/icons'
import { Rule } from 'sanity'

const artWork = {
  title: 'Artwork',
  name: 'art-work',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Optional',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Alcohol Inks', value: 'alcohol-inks' },
          { title: 'Paintings', value: 'paintings' },
          { title: 'Charcoals/Pastels', value: 'charcoals' },
          { title: 'Book', value: 'book' },
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
      validation: (Rule: Rule) => Rule.required(),
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

export default artWork
