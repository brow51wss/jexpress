// Edge Runtime compatible session token utilities
// Token format: base64url(JSON payload) + '.' + hex(HMAC-SHA256)

export interface DashboardSession {
  userId: string
  email: string
  isSuperAdmin: boolean
  exp: number
}

export const SESSION_COOKIE = 'jd_session'
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000 // 8 hours

function b64uEncode(str: string): string {
  const bytes = new TextEncoder().encode(str)
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

function b64uDecode(str: string): string {
  const padded = str + '='.repeat((4 - (str.length % 4)) % 4)
  const b64 = padded.replace(/-/g, '+').replace(/_/g, '/')
  const binary = atob(b64)
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

async function hmacSign(payload: string, secret: string): Promise<string> {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(payload))
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function createSessionToken(
  data: Omit<DashboardSession, 'exp'>
): Promise<string> {
  const secret = process.env.DASHBOARD_SESSION_SECRET!
  const session: DashboardSession = { ...data, exp: Date.now() + SESSION_DURATION_MS }
  const payload = b64uEncode(JSON.stringify(session))
  const sig = await hmacSign(payload, secret)
  return `${payload}.${sig}`
}

export async function verifySessionToken(
  token: string
): Promise<DashboardSession | null> {
  try {
    const secret = process.env.DASHBOARD_SESSION_SECRET!
    const dotIdx = token.lastIndexOf('.')
    if (dotIdx === -1) return null
    const payload = token.slice(0, dotIdx)
    const sig = token.slice(dotIdx + 1)
    const expected = await hmacSign(payload, secret)
    if (sig !== expected) return null
    const session = JSON.parse(b64uDecode(payload)) as DashboardSession
    if (session.exp < Date.now()) return null
    return session
  } catch {
    return null
  }
}
