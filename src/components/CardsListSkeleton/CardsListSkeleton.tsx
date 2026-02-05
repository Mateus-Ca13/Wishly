import { Card } from '@/components/ui/card'

type CardsListSkeletonProps = {
    cardCount?: number
    showSearchInput?: boolean
}

export default function CardsListSkeleton({ cardCount = 3, showSearchInput = true }: CardsListSkeletonProps) {
    return (
        <div className='w-full flex flex-col gap-2 animate-pulse'>
            {showSearchInput && (
                <div className='w-full h-8 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2' />
            )}

            {Array.from({ length: cardCount }).map((_, index) => (
                <Card
                    key={index}
                    className='w-full p-2 flex flex-row items-center justify-between gap-2 border-gray-300 dark:border-gray-700'
                >
                    <div className='flex justify-center items-center gap-4 w-9/10'>
                        {/* Icon skeleton */}
                        <div className='w-[70px] h-[70px] rounded-lg bg-gray-200 dark:bg-gray-800' />

                        <div className='min-w-0 flex-1 flex flex-col gap-2'>
                            {/* Title skeleton */}
                            <div className='h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4' />
                            {/* Subtitle skeleton */}
                            <div className='h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3' />
                        </div>
                    </div>

                    {/* Chevron skeleton */}
                    <div className='w-5 h-5 bg-gray-200 dark:bg-gray-800 rounded' />
                </Card>
            ))}
        </div>
    )
}
