/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ALPHA_VANTAGE_API_KEY: string
  readonly VITE_ALPHA_VANTAGE_BASE_URL: string
  readonly VITE_NODE_ENV: 'development' | 'production'
  readonly VITE_API_CACHE_DURATION: string
  readonly VITE_MAX_API_CALLS_PER_MINUTE: string
  readonly VITE_API_KEY: '9OVO6N9BYH8PF34T'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
