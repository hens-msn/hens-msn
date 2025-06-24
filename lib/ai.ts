import { HensAI } from 'hens-ai'
import { AI_CUSTOM_PROMPT } from '@/constants/prompts'

export const ai = new HensAI({
    apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY!,
    model: 'claude-3-5-sonnet',
    provider: 'anthropic',
    system: AI_CUSTOM_PROMPT,
    enableHistory: true
})