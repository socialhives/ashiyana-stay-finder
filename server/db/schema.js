import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const users = sqliteTable('users', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  phone: text('phone'),
  role: text('role').default('user'),
  isVerified: integer('is_verified', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`)
});

export const rooms = sqliteTable('rooms', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  type: text('type').notNull(),
  description: text('description'),
  price: real('price').notNull(),
  capacity: integer('capacity').notNull(),
  amenities: text('amenities'), // JSON string
  images: text('images'), // JSON string
  isAvailable: integer('is_available', { mode: 'boolean' }).default(true),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`)
});

export const bookings = sqliteTable('bookings', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text('user_id').references(() => users.id),
  roomId: text('room_id').references(() => rooms.id),
  guestName: text('guest_name').notNull(),
  guestEmail: text('guest_email').notNull(),
  guestPhone: text('guest_phone').notNull(),
  checkIn: text('check_in').notNull(),
  checkOut: text('check_out').notNull(),
  guests: integer('guests').notNull(),
  totalAmount: real('total_amount').notNull(),
  status: text('status').default('pending'),
  specialRequests: text('special_requests'),
  paymentStatus: text('payment_status').default('pending'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`)
});

export const contacts = sqliteTable('contacts', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
  status: text('status').default('unread'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`)
});

export const reviews = sqliteTable('reviews', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text('user_id').references(() => users.id),
  roomId: text('room_id').references(() => rooms.id),
  bookingId: text('booking_id').references(() => bookings.id),
  rating: integer('rating').notNull(),
  comment: text('comment'),
  isApproved: integer('is_approved', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`)
});