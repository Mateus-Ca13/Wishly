 
 interface ActionResponse <T> {
    success: boolean
    message: string
    data: T
    code: string | number 
}

interface CountResponse {
    count: number
    error: any
    data: any
    status: number
    statusText: string
}

export type { ActionResponse, CountResponse }