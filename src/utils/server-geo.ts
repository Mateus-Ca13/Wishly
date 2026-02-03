import { headers } from 'next/headers';

export async function getCountryCode(): Promise<string> {
    const headersList = await headers();
    return headersList.get('x-vercel-ip-country') || 'US';
}
