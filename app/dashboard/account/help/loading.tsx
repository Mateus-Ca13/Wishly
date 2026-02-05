export default function Loading() {
    return (
        <div className='flex flex-col gap-4 animate-pulse'>
            {/* FAQ Card skeleton */}
            <div className='flex flex-col gap-4 p-4 rounded-xl border shadow border-gray-200 dark:border-gray-800'>
                {/* Header */}
                <div className='flex flex-col gap-2'>
                    <div className='h-7 w-1/4 bg-gray-200 dark:bg-gray-800 rounded' />
                    <div className='h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded' />
                </div>
                <div className='h-px w-full bg-gray-200 dark:bg-gray-800' />

                {/* Accordion items */}
                <div className='flex flex-col gap-3'>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className='h-14 w-full bg-gray-200 dark:bg-gray-800 rounded-lg' />
                    ))}
                </div>
            </div>

            {/* Contact skeleton */}
            <div className='flex flex-col gap-4 p-4 rounded-xl border shadow border-gray-200 dark:border-gray-800'>
                <div className='h-6 w-1/4 bg-gray-200 dark:bg-gray-800 rounded' />
                <div className='h-12 w-full bg-gray-200 dark:bg-gray-800 rounded-lg' />
            </div>
        </div>
    )
}
