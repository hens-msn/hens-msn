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
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/[0.02] rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-500/[0.02] rounded-full blur-3xl" />
            </div>

            <div className="w-full px-4 relative z-10 max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-12"
                >
                    {/* Header */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full border border-orange-500/20 mb-6">
                                <Heart className="w-4 h-4 text-orange-500" />
                                <span className="text-sm font-medium text-orange-600">My Story</span>
                            </div>
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
                            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            Returned to tech in 2024 with fresh perspective. Building clean, efficient solutions 
                            powered by modern tools and guided by simplicity.
                        </motion.p>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {highlights.map((item, index) => {
                            const IconComponent = item.icon
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                                    className="group"
                                >
                                    <div className="space-y-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200/50 hover:bg-white/70 hover:shadow-lg transition-all duration-300">
                                        {/* Icon */}
                                        <div className="flex justify-center">
                                            <div className="w-12 h-12 rounded-lg bg-slate-100/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-6 h-6 text-slate-500" />
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="text-center">
                                            <h3 className="text-base font-medium text-slate-900 mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-slate-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Philosophy Quote - Compact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl p-6 border border-orange-500/10 max-w-2xl mx-auto"
                    >
                        <blockquote className="text-lg text-slate-700 italic font-light">
                            "Simplicity is the ultimate sophistication"
                        </blockquote>
                    </motion.div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => {
                                document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            Read My Thoughts
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
} 