
interface Reservation {
    user_id: string
    anonymous_giver: boolean
    created_at: string
    item_id: number
    profile: Pick<Profile, 'username'>
}

interface Item {
    id: number
    name: string
    price: number
    priority: number
    link: string
    notes: string
    reservations: Reservation
    user_id: string
    created_at: string
}

interface Profile {
    id: string
    full_name: string
    username: string
    birthday: string
    gender: string

}

interface Room {
    id: number
    name: string
    slug: string
    created_at: string
    owner_id: string
    members?: Profile[]
}

export type { Reservation, Item, Profile, Room }
