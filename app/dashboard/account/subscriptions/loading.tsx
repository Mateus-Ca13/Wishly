export default function Loading() {
    return (
        <div className='flex flex-col justify-center items-center gap-4 w-full animate-pulse'>
            {/* Current plan card skeleton */}
            <div className='flex flex-col p-4 rounded-xl border border-gray-200 dark:border-gray-800 justify-center items-center w-full'>
                <div className='h-7 w-1/3 bg-gray-200 dark:bg-gray-800 rounded mb-2' />
                <div className='h-5 w-1/4 bg-gray-200 dark:bg-gray-800 rounded mb-4' />
                <div className='h-10 w-full md:w-1/2 bg-gray-200 dark:bg-gray-800 rounded-xl mb-4' />
                <div className='flex flex-col md:flex-row gap-2 md:gap-4 w-full justify-center'>
                    <div className='h-5 w-32 bg-gray-200 dark:bg-gray-800 rounded' />
                    <div className='h-5 w-32 bg-gray-200 dark:bg-gray-800 rounded' />
                    <div className='h-5 w-32 bg-gray-200 dark:bg-gray-800 rounded' />
                </div>
            </div>

            {/* Plans list skeleton */}
            <div className='w-full flex flex-col justify-center items-center gap-4'>
                <div className='h-6 w-1/5 bg-gray-200 dark:bg-gray-800 rounded' />
                <div className='flex flex-col gap-2 md:gap-4 w-full justify-center'>
                    {[1, 2].map((i) => (
                        <div key={i} className='h-70 p-4 flex flex-col gap-2 w-full border border-gray-200 dark:border-gray-800 rounded-xl'>
                            <div className='h-16 w-48 bg-gray-200 dark:bg-gray-800 rounded-xl' />
                            <div className='h-8 w-1/3 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                            <div className='h-6 w-48 mt-4 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                            <div className='h-6 w-48 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                            <div className='h-6 w-48 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
