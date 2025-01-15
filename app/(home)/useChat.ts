import { useState } from 'react'
import { ai } from '@/lib/ai'
import { AI_CUSTOM_PROMPT } from '@/constants/prompts'

export interface ChatMessage {
    isUser: boolean
    text: string
}

export function useChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const sendMessage = async (message: string) => {
        if (!message.trim()) return
        
        const customPrompt = `${AI_CUSTOM_PROMPT} ${message}`
        
        setMessages(prev => [...prev, { isUser: true, text: message }])
        setIsLoading(true)
        
        try {
            setMessages(prev => [...prev, { isUser: false, text: "" }])
            
            let fullResponse = ""
            
            const { onChunk } = await ai.generateTextStream({
                prompt: customPrompt
            })
            
            onChunk((text) => {
                fullResponse += text
                setMessages(prev => [
                    ...prev.slice(0, -1),
                    { isUser: false, text: fullResponse }
                ])
            })
        } catch (error) {
            console.error("Error:", error)
            setMessages(prev => [...prev, { 
                isUser: false, 
                text: "Waduh error nih 😅 Coba lagi ya!" 
            }])
        } finally {
            setIsLoading(false)
        }
    }

    return {
        messages,
        setMessages,
        isLoading,
        setIsLoading,
        sendMessage
    }
}