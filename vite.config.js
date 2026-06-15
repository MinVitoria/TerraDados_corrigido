import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // IMPORTANTE: Mude o nome abaixo para o nome exato do seu repositório
  base: '/TerraDados_corrigido/',   

  logLevel: 'error',
  plugins: [
    base44({
      legacySDKImports: true,
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    react(),
  ]
})