"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send } from "lucide-react"

// === Types ===
interface ChatMessage {
    isUser: boolean
    text: string
    isStreaming?: boolean
}

interface ChatModalProps {
    isOpen: boolean
    onClose: () => void
    initialMessage: string
    messages: ChatMessage[]
    setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    sendMessage: (message: string) => Promise<void>
}

// === Animations Config ===
const loadingAnimation = {
    background: [
        "linear-gradient(90deg, #f97316 0%, #16a34a 100%)",
        "linear-gradient(90deg, #16a34a 0%, #f97316 100%)",
        "linear-gradient(90deg, #f97316 0%, #16a34a 100%)"
    ]
}

const spinnerAnimation = {
    rotate: 360
}

// === Styled Components Config ===
const messageStyles = {
    base: "max-w-[80%] rounded-xl px-4 py-2",
    user: "bg-gradient-to-r from-orange-600 to-green-600",
    ai: "bg-white/10"
}

const inputStyles = {
    container: "p-4 border-t border-white/10",
    field: "flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-white/20 transition-colors",
    button: (isLoading: boolean) => `p-3 rounded-xl w-[48px] h-[48px] bg-gradient-to-r from-orange-600 to-green-600 hover:opacity-90 transition-opacity ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`
}

export default function ChatModal({ 
    isOpen, 
    onClose, 
    initialMessage,
    messages,
    isLoading,
    sendMessage
}: ChatModalProps) {
    // === State & Refs ===
    const [message, setMessage] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // === Handlers ===
    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const trimmedMessage = message.trim()
        if (!trimmedMessage) return

        const currentMessage = trimmedMessage
        setMessage("") // Clear message dulu
        await sendMessage(currentMessage)
    }

    // === Effects ===
    useEffect(() => {
        if (isOpen && initialMessage) setMessage(initialMessage)
    }, [isOpen, initialMessage])

    useEffect(() => {
        scrollToBottom()
    }, [messages, scrollToBottom])

    useEffect(() => {
        const focusTimer = setTimeout(() => inputRef.current?.focus(), 100)
        return () => clearTimeout(focusTimer)
    }, [isLoading, messages, isOpen])

    // === Render Methods ===
    const renderMessage = ({ isUser, text, isStreaming }: ChatMessage, idx: number) => (
        <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
        >
            <div className={`${messageStyles.base} ${isUser ? messageStyles.user : messageStyles.ai}`}>
                {text || (isStreaming && (
                    <motion.div
                        animate={loadingAnimation}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="h-1 w-12 rounded-full"
                    />
                ))}
            </div>
        </motion.div>
    )

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
                    onClick={(e) => e.target === e.currentTarget && onClose()}
                >
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-0 left-0 right-0 max-w-2xl mx-auto mb-24"
                    >
                        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg mx-4">
                            {/* Messages Container */}
                            <div className="max-h-[60vh] overflow-y-auto scrollbar-none p-4">
                                <div className="flex flex-col gap-4">
                                    {messages.map(renderMessage)}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>

                            {/* Input Form */}
                            <div className={inputStyles.container}>
                                <form onSubmit={handleSubmit} className="flex gap-2">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Ketik pesan..."
                                        className={inputStyles.field}
                                        disabled={isLoading}
                                        autoFocus
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={inputStyles.button(isLoading)}
                                        disabled={isLoading}
                                        aria-label="Kirim pesan"
                                    >
                                        {isLoading ? (
                                            <motion.div 
                                                animate={spinnerAnimation}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full" 
                                                role="status"
                                                aria-label="Mengirim pesan..."
                                            />
                                        ) : (
                                            <Send className="w-5 h-5" />
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}