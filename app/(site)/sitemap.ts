import getWorks from '@/sanity/hooks/getWorks'
import getPages from '@/sanity/hooks/getPages'

const URL = 'https://karriemariebaxley.com'

export default async function sitemap() {
  const works = await getWorks()
  const pages = await getPages()

  const workRoutes = works.map(({ slug, _createdAt }) => ({
    url: `${URL}/work/${slug}`,
    lastModified: _createdAt,
  }))

  const pagesRoutes = pages.map(({ slug, _createdAt }) => ({
    url: `${URL}/${slug}`,
    lastModified: _createdAt,
  }))

  const routes = ['', '/work'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...workRoutes, ...pagesRoutes]
}
