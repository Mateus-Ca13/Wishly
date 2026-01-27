
function sendSuccessResponse(code: number, message: string = 'Sucesso', data: any) {
    console.log({ code, message, data })
    return {
        code,
        success: true,
        message,
        data
    }
}

function sendErrorResponse(code: number | string = 500, message: string = 'Erro interno do servidor', data: any) {
    console.log({ code, message, data })
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