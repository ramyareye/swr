import { db } from './db'

export const handlers = db.post.toHandlers('rest', 'https://my.backend/posts')
