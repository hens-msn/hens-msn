"use client"

import { Github, MessageCircle } from "lucide-react"
import { BsTwitterX } from "react-icons/bs"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Contact() {
    return (
        <div id="contact" className="h-screen snap-start flex items-center justify-center px-4">
            <div className="w-full max-w-3xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-12"
                >
                    <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20">
                        Contact
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold">Let&apos;s Connect! 🤝</h2>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={cn(
                        "p-6 sm:p-8 rounded-2xl",
                        "bg-white/5 backdrop-blur-sm",
                        "border border-white/10"
                    )}
                >
                    {/* Email Section */}
                    <div className="text-center sm:text-left sm:flex items-center justify-between p-4 rounded-xl bg-white/5 mb-8">
                        <div>
                            <h3 className="text-lg font-medium mb-1">Email</h3>
                            <p className="text-gray-400">hendy@example.com</p>
                        </div>
                        <motion.a 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:hendy@example.com"
                            className={cn(
                                "inline-flex items-center gap-2 px-6 py-3 rounded-full mt-4 sm:mt-0",
                                "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
                                "hover:opacity-90 transition-all text-sm font-medium"
                            )}
                        >
                            Send Email
                        </motion.a>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Social Media</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <motion.a
                                href="https://wa.me/6282254505451?text=Hai%20kak,%20boleh%20kenalan?"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all justify-center",
                                    "bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20"
                                )}
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>WhatsApp</span>
                            </motion.a>

                            <motion.a
                                href="https://x.com/hendymsn"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all justify-center",
                                    "bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20"
                                )}
                            >
                                <BsTwitterX className="w-5 h-5" />
                                <span>Twitter</span>
                            </motion.a>

                            <motion.a
                                href="https://github.com/hens-msn"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all justify-center",
                                    "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
                                )}
                            >
                                <Github className="w-5 h-5" />
                                <span>GitHub</span>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
} 