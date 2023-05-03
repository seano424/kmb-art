import { EarthGlobeIcon } from '@sanity/icons'
import { Rule } from 'sanity'

const navigation = {
  name: 'navigation',
  title: 'Navigation',
  icon: EarthGlobeIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'page' }],
          weak: true,
        },
      ],
      validation: (Rule: Rule) => Rule.max(4),
    },
  ],
}

export default navigation
