import type { IncomingMessage, ServerResponse } from 'node:http'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const cleanHtmlPaths = new Set(['/platn/support', '/platn/privacy', '/privacy', '/support'])
const cleanIndexPaths = new Set(['/platn', '/platn/'])

function rewriteCleanHtmlUrl(req: IncomingMessage) {
  const raw = req.url ?? ''
  const q = raw.indexOf('?')
  const pathname = q === -1 ? raw : raw.slice(0, q)
  const search = q === -1 ? '' : raw.slice(q)
  if (cleanHtmlPaths.has(pathname)) {
    req.url = `${pathname}.html${search}`
    return
  }
  if (cleanIndexPaths.has(pathname)) {
    req.url = `/platn/index.html${search}`
  }
}

function htmlCleanUrls(): Plugin {
  const middleware = (req: IncomingMessage, _res: ServerResponse, next: () => void) => {
    rewriteCleanHtmlUrl(req)
    next()
  }

  return {
    name: 'html-clean-urls',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlCleanUrls()],
})
