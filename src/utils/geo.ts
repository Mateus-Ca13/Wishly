export function getCurrencyByCountry(countryCode: string | null): string {
    if (!countryCode) return 'USD'; // Default global

    const country = countryCode.toUpperCase();

    const currencyMap: Record<string, string> = {
        'BR': 'BRL',
        'US': 'USD',

        // Zona Euro (Principais)
        'PT': 'EUR', // Portugal
        'ES': 'EUR', // Espanha
        'DE': 'EUR', // Alemanha
        'FR': 'EUR', // França
        'IT': 'EUR', // Itália
        'NL': 'EUR', // Holanda
        'BE': 'EUR', // Bélgica
        'AT': 'EUR', // Áustria
        'IE': 'EUR', // Irlanda
        'FI': 'EUR', // Finlândia

        // Outros
        'GB': 'GBP', // Reino Unido
        'CA': 'CAD', // Canadá
        'AU': 'AUD', // Austrália
    };

    return currencyMap[country] || 'USD'; // Default para USD para o resto do mundo
}
