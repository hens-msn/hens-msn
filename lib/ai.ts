import { HensAI } from 'hens-ai'
import { AI_CUSTOM_PROMPT } from '@/constants/prompts'

export const ai = new HensAI({
    apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY!,
    model: 'hens-next-level',
    system: AI_CUSTOM_PROMPT,
    enableHistory: true
})