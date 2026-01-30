import createIntlMiddleware from 'next-intl/middleware'

export const locales = ['pt', 'en', 'es'] as const

export const intlMiddleware = createIntlMiddleware({
    locales,
    defaultLocale: 'pt',
    localePrefix: 'never',
    localeDetection: true
})