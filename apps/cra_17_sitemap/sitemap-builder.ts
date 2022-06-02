interface RouterRoute {
  props: { path: string }
}

interface SitemapRoute {
  path: string
}

import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

// routes
import Router from './src/Routes'

const envFilename = './.env.production'
const buildPath = './public/sitemap.xml'

const dotenvFile = path.resolve(__dirname, envFilename)
if (!fs.existsSync(dotenvFile)) {
  console.error(`No ${envFilename} file found. Halting...`) // eslint-disable-line no-console
  process.exit(1)
}

dotenv.config({ path: dotenvFile })

const { PUBLIC_URL } = process.env // I am pulling my baseUrl from env - you can generate it however you want

const routes = (Router()?.props.children || [])
  .reduce((acc: SitemapRoute[], route: RouterRoute) => {
    if (Array.isArray(route)) {
      return [...acc, ...route.map((subRoute) => ({ path: subRoute.props?.path }))]
    }

    return [...acc, { path: route.props?.path }]
  }, [])
  .filter((route: SitemapRoute) => route.path)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.reduce(
  (acc: string, route: SitemapRoute) => `${acc}
  <url>
    <loc>${PUBLIC_URL}/#${route.path}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <priority>0.8</priority/>
  </url>`,
  ''
)}
</urlset>
`

fs.writeFileSync(buildPath, xml)

console.info(`> ✔️ Sitemap successfully generated at ${buildPath}`)
