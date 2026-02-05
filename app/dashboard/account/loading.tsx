export default function Loading() {
    return (
        <div className='w-full flex flex-col gap-4 animate-pulse'>
            {/* Header/Banner area skeleton */}
            <div className='w-full h-32 bg-gray-200 dark:bg-gray-800 rounded-lg' />

            {/* Content blocks skeleton */}
            <div className='w-full flex flex-col gap-3'>
                <div className='w-full h-20 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                <div className='w-full h-20 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                <div className='w-full h-20 bg-gray-200 dark:bg-gray-800 rounded-lg' />
            </div>
        </div>
    )
}
