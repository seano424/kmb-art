import { createClient } from 'next-sanity'

const dataset = process.env.NODE_ENV

const config = {
  projectId: 'zlrcnyjm',
  dataset: dataset,
  apiVersion: '2023-03-09',
  useCdn: false,
}

const client = createClient(config)

export default client
