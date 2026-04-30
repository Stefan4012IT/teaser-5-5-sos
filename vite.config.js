import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoBase = {
  'teaser-5-5-sos': '/teaser-5-5-sos/',
  'teaser-5-5-sg': '/teaser-5-5-sg/',
}

export default defineConfig(({ mode }) => {
  const packageName = process.env.npm_package_name

  return {
    plugins: [react()],
    base:
      mode === 'github'
        ? repoBase[packageName]
        : mode === 'production-path'
          ? '/odluka-za-5/'
          : '/',
  }
})