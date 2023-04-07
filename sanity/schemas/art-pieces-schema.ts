// The schema of the Milestone object-type
const artPieces = {
  name: 'art-pieces',
  title: 'Art Pieces',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Optional',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
  ],
}

export default artPieces
