export async function handleShare(url: string, title = "Wishly", text = "Confira minha lista!"): Promise<'shared' | 'copied' | 'error'> {
    const shareData = { title, text, url }

    try {
        if (navigator.share) {
            await navigator.share(shareData)
            return 'shared'
        }

        throw new Error('Web Share not supported')

    } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return 'error'

        try {
            await navigator.clipboard.writeText(url)
            return 'copied'
        } catch (clipboardErr) {
            console.error('Falha ao copiar:', clipboardErr)
            return 'error'
        }
    }
}