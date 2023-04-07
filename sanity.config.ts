import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "zlrcnyjm",
  dataset: "production",
  title: "Karrie Marie Studio",
  apiVersion: "2023-04-07",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config