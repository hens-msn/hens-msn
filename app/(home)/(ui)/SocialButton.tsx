"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function SocialButton({ 
    children, 
    href, 
    variant = "primary" 
}: { 
    children: React.ReactNode
    href: string
    variant?: "primary" | "secondary" | "whatsapp" | "twitter"
}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
                "hover:opacity-90",
                {
                    "bg-white/10 text-white border border-white/20": variant === "primary",
                    "bg-white/5 text-gray-400 border border-white/10": variant === "secondary",
                    "bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20": variant === "whatsapp",
                    "bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20": variant === "twitter",
                }
            )}
        >
            {children}
        </motion.a>
    )
} 