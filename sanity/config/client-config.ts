import { createClient } from 'next-sanity'

const config = {
  projectId: 'zlrcnyjm',
  dataset: process.env.NEXT_PUBLIC_SANITY_DB || 'production',
  apiVersion: '2023-03-09',
  useCdn: false,
}

const client = createClient(config)

export default client
