import { useState } from 'react'
import { ai } from '@/lib/ai'

export interface ChatMessage {
    isUser: boolean
    text: string
}

export function useChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const sendMessage = async (message: string) => {
        if (!message.trim()) return
        
        setMessages(prev => [...prev, { isUser: true, text: message }])
        setIsLoading(true)
        
        try {
            const response = await ai.generateText(message)
            
            setMessages(prev => [...prev, { 
                isUser: false, 
                text: response 
            }])
            
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