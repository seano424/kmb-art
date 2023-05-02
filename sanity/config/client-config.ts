import { createClient } from 'next-sanity'

const config = {
  projectId: 'zlrcnyjm',
  dataset: 'production',
  apiVersion: '2023-03-09',
  useCdn: false,
}

const client = createClient(config)

export default client
