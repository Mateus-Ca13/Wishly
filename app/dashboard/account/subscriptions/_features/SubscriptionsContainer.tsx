
import { Plan, Subscription } from '@/types/entities'
import { formatDate, formatSubscriptionStatus } from '@/utils/format'
import PlansList from './PlansList'
import { MotionDiv } from '@/components/Motion/Motion'

type SubscriptionsListProps = {
    subscription: Subscription | null
    plans: Plan[]
}

export default function SubscriptionsContainer({ subscription, plans }: SubscriptionsListProps) {


    if (!subscription) return null

    return (
        <div className='flex flex-col justify-center items-center gap-4 w-full'>
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, bounce: 0.4, type: 'spring' }}
                className='flex flex-col bg-linear-to-tr from-primary-100 to-secondary-100 dark:to-secondary-900! dark:from-primary-900! dark:border-gray-700 p-4 rounded-xl border justify-center items-center border-gray-200 w-full'>
                <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis text-black dark:text-white min-w-0 overflow-hidden'>Assinatura Atual</h2>
                <p className='text-sm md:text-base text-black dark:text-white'>Sua assinatura atual é:</p>
                <p className='text-xl md:text-2xl font-semibold whitespace-nowrap truncate text-white my-4 bg-green-500 dark:bg-green-00 p-2 px-4 rounded-xl w-full md:w-1/2 text-center'>{subscription.plan.display_name}</p>
                <div className='flex flex-col gap-2 justify-start items-start w-full md:flex-row md:justify-center md:items-center md:gap-4 md:mt-4'>
                    <p className='text-green-700 dark:text-green-300 font-semibold'><span className='text-sm md:text-base text-black dark:text-white font-semibold'>Status:</span> {formatSubscriptionStatus(subscription.status)}</p>
                    <p className='text-green-700 dark:text-green-300 font-semibold'><span className='text-sm md:text-base text-black dark:text-white font-semibold'>Iniciada em:</span> {formatDate(subscription.started_at)}</p>
                    <p className='text-green-700 dark:text-green-300 font-semibold'><span className='text-sm md:text-base text-black dark:text-white font-semibold'>Termina em:</span> {formatDate(subscription.ends_at) || 'Indeterminado'}</p>
                </div>
            </MotionDiv>

            <PlansList plans={plans} />
        </div>
    )
}
