import { useState } from 'react'
import { ai } from '@/lib/ai'

export interface ChatMessage {
    isUser: boolean
    text: string
    isStreaming?: boolean
}

export function useChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const sendMessage = async (message: string) => {
        if (!message.trim()) return
        
        setMessages(prev => [...prev, 
            { isUser: true, text: message },
            { isUser: false, text: '', isStreaming: true }
        ])
        
        setIsLoading(true)
        
        try {
            await ai.generateTextStream(message, (text) => {
                setMessages(prev => prev.map((msg, idx) => 
                    idx === prev.length - 1 ? { ...msg, text } : msg
                ))
            })

            setMessages(prev => prev.map((msg, idx) => 
                idx === prev.length - 1 ? { ...msg, isStreaming: false } : msg
            ))

        } catch (error) {
            console.error('Error generating stream:', error)
            setMessages(prev => prev.map((msg, idx) => 
                idx === prev.length - 1 
                    ? { ...msg, text: "Waduh error nih 😅 Coba lagi ya!", isStreaming: false } 
                    : msg
            ))
        } finally {
            setIsLoading(false)
        }
    }

    return { messages, setMessages, isLoading, setIsLoading, sendMessage }
}