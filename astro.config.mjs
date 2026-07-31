// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

export default defineConfig({
  site: 'https://ayveezub.github.io',
  base: '/note-box',
  fonts: [{
    provider: fontProviders.local(),
    name: 'IosevkaLight',
    cssVariable: '--font-iosevka-light',
    options: {
      variants: [{
        src: ['./src/assets/fonts/IosevkaLight.woff2'],
        weight: 'normal',
        stretch: 'normal',
        style: 'normal',
      }],
    },
  }],
})
