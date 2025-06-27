"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
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
                        className="relative flex items-center gap-3 w-full p-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-xl shadow-slate-900/10"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={message}
                            onChange={handleInputChange}
                            placeholder="Ask me anything..."
                            className="flex-1 px-4 py-3 rounded-xl bg-slate-50/50 backdrop-blur-sm border border-slate-200/50 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-orange-300 focus:bg-white/70 transition-all duration-300"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
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