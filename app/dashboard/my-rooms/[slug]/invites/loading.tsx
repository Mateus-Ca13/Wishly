export default function Loading() {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-8 animate-pulse'>
            {/* InviteRequestsList skeleton */}
            <div className='w-full flex flex-col gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800'>
                <div className='h-6 w-1/4 bg-gray-200 dark:bg-gray-800 rounded' />
                <div className='h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded' />
                <div className='flex flex-col gap-2'>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className='flex items-center gap-3 p-2'>
                            <div className='w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full' />
                            <div className='flex-1 h-5 bg-gray-200 dark:bg-gray-800 rounded' />
                            <div className='w-20 h-8 bg-gray-200 dark:bg-gray-800 rounded' />
                            <div className='w-20 h-8 bg-gray-200 dark:bg-gray-800 rounded' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
