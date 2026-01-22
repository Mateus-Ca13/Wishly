
export function getCurrentUrl(format: 'absolute' | 'origin' = "absolute") {
  if (typeof window !== 'undefined') {
    if (format === 'absolute') return window.location.href
    if (format === 'origin') return window.location.origin
  }
  return ''
}

