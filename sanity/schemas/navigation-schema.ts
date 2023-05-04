import { EarthGlobeIcon, MoonIcon } from '@sanity/icons'

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
      name: 'logoTitle',
      title: 'Logo Title',
      description: 'This is optional. Defaults to "Karrie Marie".',
      type: 'string',
    },
    {
      name: 'logoImg',
      title: 'Logo Image',
      description: 'This is optional',
      type: 'image',
      options: { hotspot: true },
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
        {
          type: 'object',
          title: 'Custom URL',
          name: 'customURL',
          icon: MoonIcon,
          fields: [
            { type: 'string', name: 'title' },
            { type: 'slug', name: 'slug' },
          ],
        },
      ],
    },
  ],
}

export default navigation
