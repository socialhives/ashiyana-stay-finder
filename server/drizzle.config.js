export default {
  schema: './db/schema.js',
  out: './drizzle',
  driver: 'libsql',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'file:./database.db'
  }
};