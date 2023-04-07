const artSeries = {
  title: 'Art Series',
  name: 'art-series',
  type: 'document',
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
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'art-pieces' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featureImage',
    },
  },
}

export default artSeries
