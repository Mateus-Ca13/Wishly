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

export function formatPriority(priority: number | null): string {
  switch (priority) {
    case 1:
      return 'Baixa prioridade'
    case 2:
      return 'Tem interesse'
    case 3:
      return 'Deseja muito!'
    default:
      return ''
  }
}

export function formatSubscriptionStatus(status: SubscriptionStatus): string {
  switch (status) {
    case 'ACTIVE':
      return 'Ativo'
    case 'EXPIRED':
      return 'Expirado'
    case 'CANCELED':
      return 'Cancelado'
    default:
      return ''
  }
}

