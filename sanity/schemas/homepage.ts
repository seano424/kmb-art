import {EarthGlobeIcon} from '@sanity/icons'
import {Rule} from 'sanity'

const homepage = {
  name: 'homepage',
  title: 'Homepage',
  icon: EarthGlobeIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
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
      name: 'featuredSeries',
      title: 'Featured Series',
      description: 'Select up to 2 series to feature on the homepage',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'art-work'}],
          weak: true,
        },
      ],
      validation: (Rule: Rule) => Rule.max(2),
    },
    {
      name: 'popularPrints',
      title: 'Popular Prints',
      description:
        'Select as many prints as you would like to feature on the homepage',
      type: 'array',
      of: [{type: 'images'}],
    },
  ],
  preview: {
    prepare(selection: any) {
      return Object.assign({}, selection, {
        title: `Homepage`,
      })
    },
  },
}

export default homepage
