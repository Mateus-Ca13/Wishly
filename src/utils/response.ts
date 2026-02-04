
function sendSuccessResponse(code: number, message: string = 'Success', data: any) {
    return {
        code,
        success: true,
        message,
        data
    }
}

function sendErrorResponse(code: number | string = 500, message: string = 'Internal server error', data: any) {
    return {
        code,
        success: false,
        message,
        data
    }
}

export {
    sendSuccessResponse,
    sendErrorResponse
}