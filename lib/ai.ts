import { HensAI } from 'hens-ai'

export const ai = new HensAI({
    apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY!,
    model: 'hens-next-level',
    enableHistory: true
})