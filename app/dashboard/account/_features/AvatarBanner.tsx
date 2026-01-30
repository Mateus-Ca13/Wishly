import { MotionDiv } from '@/components/Motion/Motion'
import { Profile, Subscription } from '@/types/entities'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

type AvatarBannerProps = {
    user: Profile
    subscription: Subscription | null
}
export default function AvatarBanner({ user, subscription }: AvatarBannerProps) {
    const initialLetter = user.username[0]
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full flex flex-col items-center justify-center px-4 pt-12 pb-4 bg-linear-to-bl from-secondary-100 to-primary-100 border-gray-200 dark:border-gray-700 dark:to-secondary-900! dark:from-primary-900! border '>
            <Avatar className='w-17.5 h-17.5  rounded-lg shadow-xl border-green-500 border-2'>
                <AvatarImage className='rounded-lg' src="" />
                <AvatarFallback className='text-black  font-semibold dark:text-white dark:to-secondary-700! dark:from-primary-700!  text-3xl bg-linear-to-tr from-secondary-100 to-primary-100 w-full h-full flex items-center justify-center rounded-lg'>{initialLetter}</AvatarFallback>
            </Avatar>
            <div className='w-full flex flex-col items-center justify-center mt-4'>
                <h2 className='text-xl max-w-2/3 md:text-3xl font-semibold truncate dark:text-white'>{user.username}</h2>
                <p className='
                text-base md:text-lg max-w-2/3 font-semibold truncate bg-green-500 text-white rounded-lg px-2 border-primary-300 
                border mt-2 p-1 dark:bg-green-700 dark:border-green-500'>{subscription?.plan.display_name}</p>
            </div>
        </MotionDiv>
    )
}
