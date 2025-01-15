"use client"

import { Github, MessageCircle } from "lucide-react"
import { BsTwitterX } from "react-icons/bs"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import SocialButton from "../(ui)/SocialButton"

export default function Contact() {
    return (
        <div id="contact" className="h-screen snap-start flex items-center justify-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto space-y-4"
            >
                <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20">
                    Contact
                </span>
                <h2 className="text-4xl font-bold">Let&apos;s Connect! 🤝</h2>
                <p className="mt-6 text-xl text-gray-400">
                    Open utk kolaborasi atau diskusi project baru
                </p>
            </motion.div>

            <div className="mt-16 flex flex-col items-center gap-6">
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:hendy@example.com"
                    className={cn(
                        "flex items-center gap-3 px-8 py-4 rounded-full",
                        "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
                        "hover:opacity-90 transition-all"
                    )}
                >
                    Email Me
                </motion.a>
                <p className="text-gray-400">
                    atau connect di social media
                </p>
                <div className="flex gap-4">
                    <SocialButton 
                        href="https://wa.me/6282254505451?text=Hai%20kak,%20boleh%20kenalan?" 
                        variant="whatsapp"
                    >
                        <MessageCircle className="w-5 h-5" />
                    </SocialButton>
                    <SocialButton href="https://x.com/hendymsn" variant="twitter">
                        <BsTwitterX className="w-5 h-5" />
                    </SocialButton>
                    <SocialButton href="https://github.com/hens-msn" variant="secondary">
                        <Github className="w-5 h-5" />
                    </SocialButton>
                </div>
            </div>
        </div>
    )
} 