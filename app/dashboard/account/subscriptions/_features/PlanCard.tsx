'use client'
import { Plan } from '@/types/entities'
import { Check, ChevronRight, Star } from 'lucide-react'
import { MotionDiv } from '@/components/Motion/Motion'
import { toast } from 'sonner'
import { useFormatter, useTranslations } from 'next-intl'
import { getCurrencyByCountry } from '@/utils/geo'

interface PlanCardProps {
    plan: Plan
    delay: number
    country: string
}

export default function PlanCard({ plan, delay, country }: PlanCardProps) {
    const t = useTranslations('Dashboard.Subscriptions.Plans');
    const format = useFormatter();

    const premium = plan.code === 'PREMIUM'

    const getPrice = () => {
        const targetCurrency = getCurrencyByCountry(country);

        if (!plan.prices || plan.prices.length === 0) {
            return { amount: plan.price ?? 0, currency: targetCurrency }
        }


        // Tenta encontrar o preço na moeda alvo
        const price = plan.prices.find(p => p.currency === targetCurrency);

        if (price) return { amount: price.amount, currency: price.currency };

        // Fallback: Tenta encontrar em USD
        const usdPrice = plan.prices.find(p => p.currency === 'USD');
        if (usdPrice) return { amount: usdPrice.amount, currency: 'USD' };

        // Último recurso: retorna o primeiro preço encontrado
        return { amount: plan.prices[0].amount, currency: plan.prices[0].currency };
    }

    const { amount, currency } = getPrice();

    const onClick = () => {
        toast.info(t('ToastResponses.warning'))
    }

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full'>
            <div
                onClick={onClick}
                className={`relative w-full hover:bg-gray-50 dark:hover:bg-gray-900 duration-200 p-3 rounded-xl flex
                flex-col items-start justify-start gap-3 cursor-pointer border-gray-200 dark:border-gray-700 
                border shadow ${premium ? 'border-primary-500 border-2 hover:bg-primary-50 dark:hover:bg-primary-900/50 dark:border-primary-700' : ''}`}>

                {premium && <div className='absolute top-2 right-2 flex items-center justify-end self-end text-start gap-2 bg-gradient p-2 rounded-xl'>
                    <Star className='text-white fill-white size-4' />
                    <p className='text-sm md:text-base text-white'>{t('recommended')}</p>
                </div>}
                <div className='flex flex-col items-start justify-start text-start my-2'>
                    <p className='text-3xl md:text-4xl text-gradient font-semibold'>{format.number(amount, { style: 'currency', currency: currency })}<span className='text-lg md:text-xl text-black dark:text-white ms-1'>{t('month')}</span></p>
                    <p className='text-lg md:text-xl text-primary-500 font-semibold dark:text-white'>{plan.display_name}</p>
                    <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{plan.description}</p>
                </div>

                <div>
                    <div className='flex items-center justify-start text-start gap-2'>
                        <Check className='text-green-500 size-4' />
                        <p className='text-sm md:text-base text-gray-500 dark:text-white'><span className='font-semibold text-primary-500'>{plan.max_rooms > 100 ? t('Info.unlimited') : plan.max_rooms}</span> {t('Info.rooms')}</p>
                    </div>
                    <div className='flex items-center justify-start text-start gap-2'>
                        <Check className='text-green-500 size-4' />
                        <p className='text-sm md:text-base text-gray-500 dark:text-white'><span className='font-semibold text-primary-500'>{plan.max_members_per_room > 100 ? t('Info.unlimited') : plan.max_members_per_room}</span> {t('Info.members')}</p>
                    </div>
                    <div className='flex items-center justify-start text-start gap-2'>
                        <Check className='text-green-500 size-4' />
                        <p className='text-sm md:text-base text-gray-500 dark:text-white'><span className='font-semibold text-primary-500'>{plan.max_items_per_wishlist > 100 ? t('Info.unlimited') : plan.max_items_per_wishlist}</span> {t('Info.items')}</p>
                    </div>
                    {premium && <div className='flex items-center justify-start text-start gap-2'>
                        <Check className='text-green-500 size-4' />
                        <p className='text-sm md:text-base text-primary-500 font-semibold'>{t('Info.notifications')}</p>
                    </div>}
                </div>
                <div className={`flex items-center self-end text-end mt-2 text-gray-400 ${premium ? ' text-primary-500' : ''}`}>
                    <p className='text-sm md:text-base '>{t('details')}</p>
                    <ChevronRight className='ms-auto size-5' />
                </div>
            </div>
        </MotionDiv>
    )
}

