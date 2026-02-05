export default function Loading() {
    return (
        <div className='animate-pulse'>
            {/* ProfileForm skeleton */}
            <div className='flex shadow flex-col gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800'>
                {/* Header */}
                <div className='flex flex-col gap-2'>
                    <div className='h-7 w-1/3 bg-gray-200 dark:bg-gray-800 rounded' />
                    <div className='h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded' />
                </div>
                <div className='h-px w-full bg-gray-200 dark:bg-gray-800' />

                {/* Form inputs row 1 */}
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='w-full h-14 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                    <div className='w-full h-14 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                </div>

                {/* Form inputs row 2 */}
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='w-full h-14 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                    <div className='w-full h-14 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                </div>

                {/* Submit button */}
                <div className='w-full md:w-1/3 h-12 bg-gray-200 dark:bg-gray-800 rounded-lg self-center mt-4' />
            </div>
        </div>
    )
}
