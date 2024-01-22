import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import { sanityIntegration as sanity } from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    wasmModuleImports: true
  }),
  image: {
    service: passthroughImageService(),
  },
  integrations: [sanity({
    projectId: '471rt6us',
    dataset: 'production',
    useCdn: false
  })],
});