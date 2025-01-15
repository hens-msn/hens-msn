"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { cn } from "@/lib/utils"
import ChatModal from "./ChatModal"
import { HensAI } from 'hens-ai'

interface ChatMessage {
    isUser: boolean
    text: string
}

// Inisialisasi AI di luar component
const ai = new HensAI({
    apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY!,
    model: 'hens-next-level'
})

export default function FloatingInput() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setMessage(value)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!message.trim()) return
        
        if (!isModalOpen) {
            setIsModalOpen(true)
        }
        
        const userMessage = message
        setMessages(prev => [...prev, { isUser: true, text: userMessage }])
        setMessage("")
        
        setIsLoading(true)
        try {
            const stream = await ai.generateTextStream({
                prompt: userMessage
            })

            let fullResponse = ""
            setMessages(prev => [...prev, { isUser: false, text: "" }])

            for await (const chunk of stream) {
                if (chunk.type === 'content_block_delta' && 'text' in chunk.delta) {
                    fullResponse += chunk.delta.text
                    setMessages(prev => [
                        ...prev.slice(0, -1),
                        { isUser: false, text: fullResponse }
                    ])
                }
            }
        } catch (error) {
            console.error("Error:", error)
            setMessages(prev => [...prev, { 
                isUser: false, 
                text: "Maaf, ada error nih 😅 Coba lagi ya!" 
            }])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 flex justify-center w-full pb-8">
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="w-full max-w-xl px-4"
                >
                    <form 
                        onSubmit={handleSubmit}
                        className={cn(
                            "relative flex items-center gap-2 w-full",
                            "p-2 rounded-2xl",
                            "bg-white/5 backdrop-blur-xl",
                            "border border-white/10",
                            "shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                        )}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={message}
                            onChange={handleInputChange}
                            placeholder="Ketik pesan kamu di sini..."
                            className={cn(
                                "flex-1 px-4 py-3 rounded-xl",
                                "bg-white/5",
                                "border border-white/10",
                                "text-white placeholder:text-gray-400",
                                "focus:outline-none focus:border-white/20",
                                "transition-colors"
                            )}
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                                "p-3 rounded-xl",
                                "bg-gradient-to-r from-orange-600 to-green-600",
                                "hover:opacity-90 transition-opacity"
                            )}
                        >
                            <Send className="w-5 h-5" />
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            <ChatModal 
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false)
                    setMessage("")
                    if (inputRef.current) {
                        inputRef.current.value = ""
                    }
                }}
                initialMessage={message}
                messages={messages}
                setMessages={setMessages}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        </>
    )
} 