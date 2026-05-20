/** Attributes that discourage password managers from injecting DOM into non-login fields. */
export const extensionSafeFormProps = {
  'data-lpignore': 'true',
  'data-1p-ignore': '',
  'data-bwignore': '',
  'data-dashlane-ignore': 'true',
} as const

export const extensionSafeInputProps = {
  'data-lpignore': 'true',
  'data-1p-ignore': '',
} as const
