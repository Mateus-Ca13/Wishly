export default function Loading() {
    return (
        <div className='w-full flex flex-col gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 animate-pulse'>
            <div className='h-6 w-1/3 bg-gray-200 dark:bg-gray-800 rounded' />
            <div className='h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded' />
            <div className='h-px w-full bg-gray-200 dark:bg-gray-800' />
            <div className='flex flex-col  gap-4'>
                <div className="w-1/3 h-6 bg-gray-200 dark:bg-gray-800 rounded" />
                <div className='w-full h-12 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                <div className="w-1/3 h-6 bg-gray-200 dark:bg-gray-800 rounded" />
                <div className='w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                <div className='flex items-center justify-center  gap-4'>
                    <div className='w-32 h-48 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                    <div className='w-32 h-48 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                    <div className='w-32 h-48 bg-gray-200 dark:bg-gray-800 rounded-lg' />
                </div>
            </div>
            <div className='w-full mt-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-lg self-center' />
        </div>
    )
}
