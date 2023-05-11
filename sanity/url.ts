const devMode = process.env.NEXT_PUBLIC_SANITY_DB === 'development'

export default new URL(
  `https://zlrcnyjm.api.sanity.io/v2021-10-21/data/query/${
    devMode ? 'development' : 'production'
  }`
)
