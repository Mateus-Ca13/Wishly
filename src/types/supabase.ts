export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    // Allows to automatically instantiate createClient with right options
    // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
    __InternalSupabase: {
        PostgrestVersion: "14.1"
    }
    graphql_public: {
        Tables: {
            [_ in never]: never
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            graphql: {
                Args: {
                    extensions?: Json
                    operationName?: string
                    query?: string
                    variables?: Json
                }
                Returns: Json
            }
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
    public: {
        Tables: {
            items: {
                Row: {
                    created_at: string
                    id: number
                    link: string
                    name: string
                    notes: string
                    price: number
                    priority: number
                    user_id: string
                }
                Insert: {
                    created_at?: string
                    id?: number
                    link?: string
                    name: string
                    notes?: string
                    price: number
                    priority: number
                    user_id?: string
                }
                Update: {
                    created_at?: string
                    id?: number
                    link?: string
                    name?: string
                    notes?: string
                    price?: number
                    priority?: number
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "items_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "items_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "public_profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
            plan_prices: {
                Row: {
                    amount: number
                    currency: string
                    gateway_price_id: string
                    id: number
                    plan_id: number
                }
                Insert: {
                    amount: number
                    currency: string
                    gateway_price_id?: string
                    id?: number
                    plan_id: number
                }
                Update: {
                    amount?: number
                    currency?: string
                    gateway_price_id?: string
                    id?: number
                    plan_id?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "plans_price_plan_id_fkey"
                        columns: ["plan_id"]
                        isOneToOne: false
                        referencedRelation: "plans"
                        referencedColumns: ["id"]
                    },
                ]
            }
            plans: {
                Row: {
                    code: string
                    id: number
                    max_items_per_wishlist: number
                    max_members_per_room: number
                    max_rooms: number
                    viewable: boolean
                }
                Insert: {
                    code?: string
                    id?: number
                    max_items_per_wishlist: number
                    max_members_per_room: number
                    max_rooms: number
                    viewable?: boolean
                }
                Update: {
                    code?: string
                    id?: number
                    max_items_per_wishlist?: number
                    max_members_per_room?: number
                    max_rooms?: number
                    viewable?: boolean
                }
                Relationships: []
            }
            profiles: {
                Row: {
                    birthday: string | null
                    created_at: string
                    email: string
                    full_name: string
                    gender: Database["public"]["Enums"]["GENDERS"]
                    id: string
                    onboarding_completed: boolean
                    slug: string
                    username: string
                }
                Insert: {
                    birthday?: string | null
                    created_at?: string
                    email: string
                    full_name: string
                    gender?: Database["public"]["Enums"]["GENDERS"]
                    id?: string
                    onboarding_completed?: boolean
                    slug?: string
                    username: string
                }
                Update: {
                    birthday?: string | null
                    created_at?: string
                    email?: string
                    full_name?: string
                    gender?: Database["public"]["Enums"]["GENDERS"]
                    id?: string
                    onboarding_completed?: boolean
                    slug?: string
                    username?: string
                }
                Relationships: []
            }
            reservations: {
                Row: {
                    anonymous_giver: boolean
                    created_at: string
                    item_id: number
                    user_id: string
                }
                Insert: {
                    anonymous_giver: boolean
                    created_at?: string
                    item_id?: number
                    user_id?: string
                }
                Update: {
                    anonymous_giver?: boolean
                    created_at?: string
                    item_id?: number
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "RESERVATIONS_item_id_fkey"
                        columns: ["item_id"]
                        isOneToOne: true
                        referencedRelation: "items"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "reservations_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "reservations_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "public_profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
            room_members: {
                Row: {
                    joined_at: string
                    role: Database["public"]["Enums"]["ROOM_MEMBER_ROLES"]
                    room_id: number
                    user_id: string
                }
                Insert: {
                    joined_at?: string
                    role?: Database["public"]["Enums"]["ROOM_MEMBER_ROLES"]
                    room_id?: number
                    user_id: string
                }
                Update: {
                    joined_at?: string
                    role?: Database["public"]["Enums"]["ROOM_MEMBER_ROLES"]
                    room_id?: number
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "ROOMS_MEMBERS_room_id_fkey"
                        columns: ["room_id"]
                        isOneToOne: false
                        referencedRelation: "public_rooms"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "ROOMS_MEMBERS_room_id_fkey"
                        columns: ["room_id"]
                        isOneToOne: false
                        referencedRelation: "rooms"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "rooms_members_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "rooms_members_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "public_profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
            rooms: {
                Row: {
                    cover_theme: number
                    created_at: string
                    description: string
                    id: number
                    name: string
                    owner_id: string
                    requires_approval: boolean
                    slug: string
                }
                Insert: {
                    cover_theme?: number
                    created_at?: string
                    description?: string
                    id?: number
                    name: string
                    owner_id?: string
                    requires_approval?: boolean
                    slug: string
                }
                Update: {
                    cover_theme?: number
                    created_at?: string
                    description?: string
                    id?: number
                    name?: string
                    owner_id?: string
                    requires_approval?: boolean
                    slug?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "rooms_owner_id_fkey"
                        columns: ["owner_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "rooms_owner_id_fkey"
                        columns: ["owner_id"]
                        isOneToOne: false
                        referencedRelation: "public_profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
            shared_wishlists: {
                Row: {
                    created_at: string
                    expires_at: string
                    id: number
                    user_id: string
                }
                Insert: {
                    created_at?: string
                    expires_at?: string
                    id?: number
                    user_id?: string
                }
                Update: {
                    created_at?: string
                    expires_at?: string
                    id?: number
                    user_id?: string
                }
                Relationships: []
            }
            subscriptions: {
                Row: {
                    customer_id: string | null
                    ends_at: string | null
                    id: number
                    plan_id: number
                    started_at: string
                    status: Database["public"]["Enums"]["SUBSCRIPTION_STATUS"]
                    user_id: string
                }
                Insert: {
                    customer_id?: string | null
                    ends_at?: string | null
                    id?: number
                    plan_id: number
                    started_at: string
                    status?: Database["public"]["Enums"]["SUBSCRIPTION_STATUS"]
                    user_id?: string
                }
                Update: {
                    customer_id?: string | null
                    ends_at?: string | null
                    id?: number
                    plan_id?: number
                    started_at?: string
                    status?: Database["public"]["Enums"]["SUBSCRIPTION_STATUS"]
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "subscriptions_plan_id_fkey"
                        columns: ["plan_id"]
                        isOneToOne: false
                        referencedRelation: "plans"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "subscriptions_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: true
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "subscriptions_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: true
                        referencedRelation: "public_profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
        }
        Views: {
            public_profiles: {
                Row: {
                    birthday: string | null
                    full_name: string | null
                    gender: Database["public"]["Enums"]["GENDERS"] | null
                    id: string | null
                    slug: string | null
                    username: string | null
                }
                Insert: {
                    birthday?: string | null
                    full_name?: string | null
                    gender?: Database["public"]["Enums"]["GENDERS"] | null
                    id?: string | null
                    slug?: string | null
                    username?: string | null
                }
                Update: {
                    birthday?: string | null
                    full_name?: string | null
                    gender?: Database["public"]["Enums"]["GENDERS"] | null
                    id?: string | null
                    slug?: string | null
                    username?: string | null
                }
                Relationships: []
            }
            public_rooms: {
                Row: {
                    id: number | null
                    name: string | null
                    owner_id: string | null
                    slug: string | null
                }
                Insert: {
                    id?: number | null
                    name?: string | null
                    owner_id?: string | null
                    slug?: string | null
                }
                Update: {
                    id?: number | null
                    name?: string | null
                    owner_id?: string | null
                    slug?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "rooms_owner_id_fkey"
                        columns: ["owner_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "rooms_owner_id_fkey"
                        columns: ["owner_id"]
                        isOneToOne: false
                        referencedRelation: "public_profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
        }
        Functions: {
            is_member_of_room: { Args: { _room_id: number }; Returns: boolean }
        }
        Enums: {
            GENDERS: "MALE" | "FEMALE" | "OTHER" | "UNKNOWN"
            ROOM_MEMBER_ROLES: "USER" | "ADMIN"
            SUBSCRIPTION_STATUS: "ACTIVE" | "EXPIRED" | "CANCELED"
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
    DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
    TableName extends DefaultSchemaTableNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals
    }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
}
    ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R
        }
    ? R
    : never
    : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
            Row: infer R
        }
    ? R
    : never
    : never

export type TablesInsert<
    DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
    TableName extends DefaultSchemaTableNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals
    }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
}
    ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Insert: infer I
    }
    ? I
    : never
    : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
    }
    ? I
    : never
    : never

export type TablesUpdate<
    DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
    TableName extends DefaultSchemaTableNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals
    }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
}
    ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Update: infer U
    }
    ? U
    : never
    : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
    }
    ? U
    : never
    : never

export type Enums<
    DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
    EnumName extends DefaultSchemaEnumNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals
    }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
}
    ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
    PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
    CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals
    }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
}
    ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
    graphql_public: {
        Enums: {},
    },
    public: {
        Enums: {
            GENDERS: ["MALE", "FEMALE", "OTHER", "UNKNOWN"],
            ROOM_MEMBER_ROLES: ["USER", "ADMIN"],
            SUBSCRIPTION_STATUS: ["ACTIVE", "EXPIRED", "CANCELED"],
        },
    },
} as const
