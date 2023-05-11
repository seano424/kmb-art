import { defineConfig, isDev } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'
import { ImagesIcon, EarthAmericasIcon } from '@sanity/icons'
import { visionTool } from '@sanity/vision'

const devOnlyPlugins = [visionTool()]

const dataset = process.env.NODE_ENV

const config = defineConfig({
  projectId: 'zlrcnyjm',
  dataset: dataset,
  title: 'Karrie Marie Studio',
  apiVersion: '2023-04-07',
  basePath: '/studio',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('art-work'),
            S.listItem()
              .title('Homepage Images')
              .icon(ImagesIcon)
              .child(
                S.document()
                  .schemaType('homepageImages')
                  .documentId('homepageImages')
              ),
            S.listItem()
              .title('Navigation')
              .icon(EarthAmericasIcon)
              .child(
                S.document().schemaType('navigation').documentId('navigation')
              ),
            S.documentTypeListItem('page'),
          ]),
    }),
    unsplashImageAsset(),
    ...(isDev ? devOnlyPlugins : []),
  ],
  schema: { types: schemas },
})

export default config
