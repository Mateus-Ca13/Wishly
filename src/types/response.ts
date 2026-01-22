 
 interface ActionResponse <T> {
    success: boolean
    message: string
    data: T
    code: string | number 
}

export type { ActionResponse }