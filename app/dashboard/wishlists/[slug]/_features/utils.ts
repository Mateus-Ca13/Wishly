import { ChevronDown, Heart, ThumbsUp } from "lucide-react";

export const prioritiesMap: Record<number, { el: any, color: string, bg: string }> = {
    1: { el: ChevronDown, color: 'text-gray-800 dark:text-gray-400', bg: 'bg-gray-100 dark:bg-gray-800' },
    2: { el: ThumbsUp, color: 'text-green-800 dark:text-green-600', bg: 'bg-green-100 dark:bg-green-800' },
    3: { el: Heart, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-800' }
}