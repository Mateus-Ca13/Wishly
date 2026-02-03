import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = (await requestLocale) || 'pt';

    return {
        locale,
        messages: (await import(`@root/messages/${locale}.json`)).default
    };
});

