import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'
import { ImagesIcon } from '@sanity/icons'

const config = defineConfig({
  projectId: 'zlrcnyjm',
  dataset: 'production',
  title: 'Karrie Marie Studio',
  apiVersion: '2023-04-07',
  basePath: '/studio',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Homepage Series / Images')
              .icon(ImagesIcon)
              .child(
                S.document()
                  .schemaType('homepageSeries')
                  .documentId('homepageSeries')
              ),
            ...S.documentTypeListItems().filter(
              (listItem: any) => !['homepageSeries'].includes(listItem.getId())
            ),
          ]),
    }),
  ],
  schema: { types: schemas },
})

export default config
