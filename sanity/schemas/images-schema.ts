// The schema of the Milestone object-type
const images = {
  name: 'images',
  title: 'Images',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
    },
  ],
}

export default images
