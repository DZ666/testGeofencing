declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: 'development' | 'production'
    PORT?: string
    MONGODB_URL?: string
  }
}
