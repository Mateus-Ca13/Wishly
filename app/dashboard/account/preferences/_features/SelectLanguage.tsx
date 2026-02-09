'use client'
import Button from '@/components/Button/Button';
import { Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

const languages = [
    { code: 'pt', label: 'Português (BR)' },
    { code: 'en', label: 'English (US)' },
    { code: 'es', label: 'Español (ES)' },
    { code: 'it', label: 'Italiano (IT)' },
    { code: 'fr', label: 'Français (FR)' },
    { code: 'ja', label: '日本語 (JP)' },


] as const;

export default function SelectLanguage() {
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const switchLanguage = (newLocale: string) => {
        if (newLocale === locale) return;

        startTransition(() => {
            document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
            router.refresh();
        });
    };

    return (
        <div className='flex flex-col w-full gap-4'>
            {languages.map((lang) => (
                <Button
                    key={lang.code}
                    variant='blank'
                    className={`w-full flex items-center justify-between gap-2 border-2  p-4 rounded-lg transition-all ${locale === lang.code
                        ? 'border-primary-300 dark:border-primary-500 bg-primary-50 dark:bg-gray-800'
                        : 'border-gray-300 dark:border-gray-600 hover:border-primary-400'
                        }`}
                    onClick={() => switchLanguage(lang.code)}
                    disabled={isPending}
                >
                    <span className='text-lg md:text-xl text-black dark:text-white flex items-center gap-2'>
                        <span>
                            <Image src={`/country_icons/${lang.code}.png`} className='rounded-full' alt={lang.label} width={24} height={24} />
                        </span>
                        {lang.label}
                    </span>
                    {locale === lang.code && (
                        <Check className='text-primary-500' />
                    )}
                </Button>
            ))}
        </div>
    )
}
