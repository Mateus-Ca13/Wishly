import { ChevronDown, Heart, ThumbsUp } from "lucide-react";

export const prioritiesMap: Record<number, { el: any, color: string, bg: string }> = {
    1: { el: ChevronDown, color: 'text-gray-800' , bg: 'bg-gray-100'},
    2: { el: ThumbsUp, color: 'text-green-800' , bg: 'bg-green-100'},
    3: { el: Heart, color: 'text-green-600' , bg: 'bg-green-100'}
}