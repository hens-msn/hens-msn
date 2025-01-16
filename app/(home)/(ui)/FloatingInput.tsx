"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { cn } from "@/lib/utils"
import ChatModal from "./ChatModal"
import { useChat } from '../useChat'

export default function FloatingInput() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [message, setMessage] = useState("")
    const { messages, setMessages, isLoading, setIsLoading, sendMessage } = useChat()
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
        
        const currentMessage = message
        setMessage("")
        await sendMessage(currentMessage)
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
                            placeholder="Ask me anything..."
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
                            aria-label="Kirim pesan"
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
                sendMessage={sendMessage}
            />
        </>
    )
} 