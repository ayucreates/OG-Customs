import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret'

export function signToken(payload: { username: string }) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as { username: string }
  } catch {
    return null
  }
}

export function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium' }).format(date)
}
