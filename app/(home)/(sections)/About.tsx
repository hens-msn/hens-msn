"use client"

import { motion } from "framer-motion"
import { Heart, Coffee, Code } from "lucide-react"

export default function About() {
    const highlights = [
        {
            icon: Coffee,
            title: "Fresh Start 2024",
            description: "Reset & modern mindset"
        },
        {
            icon: Code,
            title: "Clean Code",
            description: "Simplicity & efficiency"
        },
        {
            icon: Heart,
            title: "AI-Powered",
            description: "Assistant, not replacement"
        }
    ]

    return (
        <section id="about" className="h-screen snap-start flex items-center justify-center relative">
            <div className="w-full px-4 relative z-10 max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-16"
                >
                    {/* Header */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4">
                                About Me
                            </h2>
                            <div className="w-16 h-px bg-gradient-to-r from-orange-500 to-red-500 mx-auto" />
                        </motion.div>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light"
                        >
                            Returned to tech in 2024 with fresh perspective. Building clean, efficient solutions 
                            powered by modern tools and guided by simplicity.
                        </motion.p>
                    </div>

                    {/* Highlights - Minimalist Grid */}
                    <div className="grid md:grid-cols-3 gap-16">
                        {highlights.map((item, index) => {
                            const IconComponent = item.icon
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                                    className="group space-y-4"
                                >
                                    {/* Minimal Icon */}
                                    <div className="flex justify-center">
                                        <motion.div 
                                            whileHover={{ scale: 1.1 }}
                                            className="w-12 h-12 flex items-center justify-center"
                                        >
                                            <IconComponent className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-all duration-500" />
                                        </motion.div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="text-center space-y-2">
                                        <h3 className="text-lg font-light text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Philosophy Quote - Minimal */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="max-w-xl mx-auto"
                    >
                        <blockquote className="text-lg text-slate-600 italic font-light">
                            &ldquo;Simplicity is the ultimate sophistication&rdquo;
                        </blockquote>
                    </motion.div>

                    {/* Minimal CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="pt-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm hover:bg-slate-50"
                            onClick={() => {
                                document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            Read My Thoughts
                        </motion.button>
                    </motion.div>
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
        </section>
    )
} 