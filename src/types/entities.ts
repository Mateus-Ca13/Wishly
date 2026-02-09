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
    description: string
    slug: string
    created_at: string
    owner_id: string
    cover_theme: number
    room_members: [{ count: number }]
    requires_approval: boolean
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
    prices?: PlanPrice[]
    max_items_per_wishlist: number
    max_members_per_room: number
    max_rooms: number
}

interface JoinRequest {
    id: number
    room_id: number
    user_id: string
    requested_at: string
    profile?: Profile
    room?: Room
}

export type { Reservation, Item, ItemWithoutReservation, Profile, Room, JoinRequest, Subscription, Plan, PlanPrice, Gender, SubscriptionStatus }

export { GenderOptions, SubscriptionStatusOptions }

