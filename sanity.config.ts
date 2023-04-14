import { defineConfig, buildLegacyTheme } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'
import { ImagesIcon } from '@sanity/icons'

const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--my-blue': '#4285f4',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-white'],
  '--component-text-color': props['--my-black'],

  /* Brand */
  '--brand-primary': props['--my-blue'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-blue'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-blue'],
})

const config = defineConfig({
  projectId: 'zlrcnyjm',
  dataset: 'production',
  title: 'Karrie Marie Studio',
  apiVersion: '2023-04-07',
  basePath: '/studio',
  theme: myTheme,
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
    unsplashImageAsset(),
  ],
  schema: { types: schemas },
})

export default config
