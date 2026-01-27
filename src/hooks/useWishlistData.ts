import { useState, useCallback, useEffect, useRef } from 'react'
import { getItemsAction } from '@/actions/items'
import { Item, ItemWithoutReservation } from '@/types/entities'

export function useWishlistData(userId: string, initialItems: { items: Item[] | ItemWithoutReservation[], count: number }, includeReservations: boolean = true) {
    const [items, setItems] = useState<{ items: Item[] | ItemWithoutReservation[], count: number }>({ items: initialItems.items, count: initialItems.count })
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const isFirstRender = useRef(true)

    const fetchItems = useCallback(async (searchTerm: string, showLoader = true) => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        if (showLoader) setIsLoading(true)
        else setIsRefreshing(true)

        try {
            const response = await getItemsAction(searchTerm, userId, includeReservations)
            setItems(response.success ? response.data || { items: [], count: 0 } : { items: [], count: 0 })
        } finally {
            setIsLoading(false)
            setIsRefreshing(false)
        }
    }, [userId, includeReservations])

    // Debounce effect
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchItems(search, true)
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [search, fetchItems])

    return {
        items, setItems,
        search, setSearch,
        isLoading, isRefreshing,
        refresh: () => fetchItems(search, false)
    }
}