export default function Loading() {
    return (
        <div className='animate-pulse'>
            <div className='flex shadow flex-col gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800'>
                {/* Theme section */}
                <div className='flex flex-col gap-2'>
                    <div className='h-7 w-1/4 bg-gray-200 dark:bg-gray-800 rounded' />
                    <div className='h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded' />
                </div>
                <div className='h-px w-full bg-gray-200 dark:bg-gray-800' />
                <div className="h-12 w-1/3 bg-gray-200 dark:bg-gray-800 rounded-lg" />
                <div className='flex gap-4'>
                    <div className='h-24 w-1/3 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                    <div className='h-24 w-1/3 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                    <div className='h-24 w-1/3 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                </div>

                {/* Language section */}
                <div className='flex flex-col gap-2 mt-4'>
                    <div className='h-7 w-1/4 bg-gray-200 dark:bg-gray-800 rounded' />
                    <div className='h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded' />
                </div>
                <div className='h-px w-full bg-gray-200 dark:bg-gray-800' />
                <div className='h-14 w-full bg-gray-200 dark:bg-gray-800 rounded-lg' />
                <div className='h-14 w-full bg-gray-200 dark:bg-gray-800 rounded-lg' />
                <div className='h-14 w-full bg-gray-200 dark:bg-gray-800 rounded-lg' />
                <div className='h-14 w-full bg-gray-200 dark:bg-gray-800 rounded-lg' />
                <div className='h-14 w-full bg-gray-200 dark:bg-gray-800 rounded-lg' />
                <div className='h-14 w-full bg-gray-200 dark:bg-gray-800 rounded-lg' />
            </div>
        </div>
    )
}
