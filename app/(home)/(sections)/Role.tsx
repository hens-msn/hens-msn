"use client"

import { motion } from "framer-motion"

export default function Role() {
    return (
        <div id="role" className="h-screen snap-start flex items-center justify-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl px-4"
            >
                <span className="block text-3xl sm:text-4xl bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent font-bold mb-6">
                    Framework Developer
                </span>
                <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                    Passionate developer yg suka bikin tools utk mempermudah developer lain. Creator of{" "}
                    <span className="font-semibold text-white">Kontas Framework</span> 🚀
                </p>
            </motion.div>
        </div>
    )
} 