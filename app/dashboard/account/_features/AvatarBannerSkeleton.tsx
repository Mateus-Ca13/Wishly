export default function AvatarBannerSkeleton() {
    return (
        <div className='w-full flex flex-col items-center justify-center px-4 pt-12 pb-4 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border animate-pulse'>
            {/* Avatar skeleton */}
            <div className='w-17.5 h-17.5 rounded-lg bg-gray-300 dark:bg-gray-700 shadow-xl' />

            <div className='w-full flex flex-col items-center justify-center mt-4 gap-2'>
                {/* Username skeleton */}
                <div className='h-7 w-32 bg-gray-300 dark:bg-gray-700 rounded' />
                {/* Plan badge skeleton */}
                <div className='h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded-lg mt-2' />
            </div>
        </div>
    )
}
