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
      required: true,
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
      name: 'ctaAllArt',
      title: 'Call To Action for Artwork Page',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading', required: true},
        {
          name: 'label',
          type: 'string',
          title: 'Link Button Label',
          required: true,
        },
      ],
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
      title: 'Popular Pieces',
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
