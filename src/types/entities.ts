import z from "zod"

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
    reservations?: Reservation
    user_id: string
    created_at: string
}

interface ItemWithoutReservation extends Omit<Item, 'reservations'> { }

interface Profile {
    slug: string
    id: string
    full_name: string
    username: string
    birthday: string | null
    gender: Gender

}

const GenderOptions = ["MALE", "FEMALE", "OTHER", "UNKNOWN"] as const
const GenderEnum = z.enum(GenderOptions)
type Gender = z.infer<typeof GenderEnum>;

interface Room {
    id: number
    name: string
    slug: string
    created_at: string
    owner_id: string
    cover_theme: number
    room_members: [{ count: number }]
}

interface Subscription {
    id: number
    user_id: string
    plan_id: number
    started_at: string
    ends_at: string | null
    status: SubscriptionStatus
    plan: Plan
}

const SubscriptionStatusOptions = ["ACTIVE", "EXPIRED", "CANCELED"] as const
const SubscriptionStatusEnum = z.enum(SubscriptionStatusOptions)
type SubscriptionStatus = z.infer<typeof SubscriptionStatusEnum>;

interface PlanPrice {
    id: number
    plan_id: number
    currency: string
    amount: number
    gateway_price_id?: string
}

interface Plan {
    id: number
    code: string
    price: number // Deprecated: use prices array instead
    prices?: PlanPrice[]
    display_name: string
    description: string
    max_items_per_wishlist: number
    max_members_per_room: number
    max_rooms: number
}

export type { Reservation, Item, ItemWithoutReservation, Profile, Room, Subscription, Plan, PlanPrice, Gender, SubscriptionStatus }

export { GenderOptions, SubscriptionStatusOptions }

