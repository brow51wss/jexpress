// In-memory rate limiter — best-effort protection on Vercel serverless.
// Resets on cold starts; sufficient for low-traffic marketing forms.
const store = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5;   // per IP per window

export function checkRateLimit(ip: string): { allowed: boolean } {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false };
  }

  entry.count++;
  return { allowed: true };
}

// Extract the real client IP from Next.js request headers
export function getClientIp(request: Request): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  );
}
