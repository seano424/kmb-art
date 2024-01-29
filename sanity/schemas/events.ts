import {EarthGlobeIcon} from '@sanity/icons'

const events = {
  name: 'events',
  title: 'Events',
  type: 'document',
  icon: EarthGlobeIcon,
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
      options: {source: 'title', maxLength: 96},
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Optional',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Title',
          type: 'string',
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'images',
      description: 'Optional',
      title: 'Images',
      type: 'array',
      of: [{type: 'images'}],
    },
  ],
}

export default events
