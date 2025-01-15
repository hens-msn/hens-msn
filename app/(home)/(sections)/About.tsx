"use client"

import { motion } from "framer-motion"
import { Heart, Coffee, Sparkles } from "lucide-react"

export default function About() {
    return (
        <div id="about" className="h-screen snap-start flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <Heart className="w-96 h-96 -rotate-12" />
            </div>
            <motion.div 
                className="absolute top-32 right-20 w-28 h-28 rounded-full bg-orange-500/10"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
            />
            <motion.div 
                className="absolute bottom-32 left-20 w-36 h-36 rounded-full bg-green-500/10"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
            />

            {/* Floating Icons */}
            <motion.div 
                className="absolute top-1/3 left-12"
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
            >
                <Coffee className="w-8 h-8 text-orange-400/20" />
            </motion.div>
            <motion.div 
                className="absolute bottom-1/3 right-12"
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                }}
            >
                <Sparkles className="w-8 h-8 text-green-400/20" />
            </motion.div>

            {/* Main Content */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto space-y-8 px-4 relative z-10"
            >
                <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 pb-1">
                    My Journey 🚀
                </h2>
                <div className="space-y-6">
                    <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                        Setelah break panjang dari dunia tech, di awal 2024 aku memutuskan utk &quot;reset&quot; & mendalami 
                        coding dari perspektif baru. Dgn mindset fresh & passion utk memahami teknologi modern, 
                        aku fokus pd pengembangan yg clean & efisien ✨
                    </p>
                    <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                        Aku percaya bhw kode yg baik adalah kode yg mudah dipahami. Dgn memanfaatkan AI sbg asisten 
                        & tools modern lainnya, aku mengoptimalkan proses development sambil tetap mempertahankan 
                        kontrol penuh atas setiap keputusan teknis 🎯
                    </p>
                    <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                        Journey ini membawaku utk menciptakan <span className="text-white font-medium">Kontas Framework</span>, 
                        dimana aku bs menuangkan filosofi &quot;simplicity is the ultimate sophistication&quot; dlm bentuk 
                        kode yg meaningful & maintainable 🚀
                    </p>
                </div>
            </motion.div>
        </div>
    )
} 