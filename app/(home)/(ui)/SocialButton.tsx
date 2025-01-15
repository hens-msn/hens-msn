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
    variant?: "primary" | "secondary"
}) {
    return (
        <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={href}
            className={cn(
                "flex items-center gap-2 px-8 py-4 rounded-full transition-all",
                "hover:-translate-y-0.5",
                variant === "primary" 
                    ? "bg-white/10 text-white hover:bg-white/20" 
                    : "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
            )}
        >
            {children}
        </motion.a>
    )
} 