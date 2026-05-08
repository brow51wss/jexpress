export const LIMITS = {
  name: 200,
  email: 254,
  phone: 30,
  short: 200,
  message: 2000,
  number: 10,
};

// Trim and enforce max length — use this for DB storage
export function cleanField(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

// HTML-escape a clean string before interpolating into email templates
export function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Validate email format
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Fallback display: return value or em-dash
export function display(value: string): string {
  return esc(value) || '—';
}
