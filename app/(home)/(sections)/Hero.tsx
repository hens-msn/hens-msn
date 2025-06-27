"use client"

import { motion } from "framer-motion"

export default function Hero() {
    return (
        <motion.section 
            id="hero"
            className="h-screen snap-start flex items-center justify-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center space-y-8 max-w-4xl mx-auto">
                {/* Profile Avatar */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative w-40 h-40 mx-auto mb-12"
                >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-2xl scale-110" />
                    
                    {/* Main avatar container */}
                    <div className="relative w-full h-full rounded-full border-2 border-white/80 backdrop-blur-sm bg-white/80 shadow-2xl overflow-hidden">
                        <video 
                            src="/hens-fire.mp4"
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        
                        {/* Inner border for depth */}
                        <div className="absolute inset-1 rounded-full border border-white/20" />
                    </div>
                </motion.div>

                {/* Name & Title */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-slate-900">
                        Hendy Mamusung
                    </h1>
                    <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-red-500 mx-auto" />
                </motion.div>

                {/* Subtitle */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-3"
                >
                    <p className="text-lg sm:text-xl text-slate-600 font-light">
                        Framework Developer
                    </p>
                    <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto leading-relaxed">
                        Building the future with clean code and innovative solutions
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="pt-8"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm hover:bg-slate-50"
                        onClick={() => {
                            document.getElementById('role')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        Explore My Work
                    </motion.button>
                </motion.div>
            </div>

            {/* Minimal scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
            </motion.div>
        </motion.section>
    )
} 