import { SubscriptionStatus } from "@/types/entities"

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)
}

export function formatDate(date: string | null, format: 'short' | 'long' = 'short'): string {

  if (!date) return ''

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: format === 'short' ? 'numeric' : 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }
  return new Date(date).toLocaleDateString('pt-BR', options)
}



