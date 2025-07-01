import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from 'libsql';
import * as schema from './schema.js';

const client = createClient({
  url: process.env.DATABASE_URL || 'file:./database.db'
});

export const db = drizzle(client, { schema });
export { schema };