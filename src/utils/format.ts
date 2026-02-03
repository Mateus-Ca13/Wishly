export function getCurrencySymbol(currencyCode: string, locale = 'es') {
  try {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
    });

    const parts = formatter.formatToParts(0);
    const symbol = parts.find(part => part.type === 'currency')?.value;


    return symbol || currencyCode;
  } catch (e) {
    return currencyCode;
  }
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



