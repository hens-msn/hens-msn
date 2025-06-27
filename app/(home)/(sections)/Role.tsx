"use client"

import { motion } from "framer-motion"
import { Code2, Sparkles, Zap } from "lucide-react"

export default function Role() {
    const features = [
        {
            icon: Code2,
            title: "Framework Creator",
            description: "Building Kontas Framework for modern development"
        },
        {
            icon: Zap,
            title: "AI-Driven Development", 
            description: "Leveraging AI to accelerate development process"
        },
        {
            icon: Sparkles,
            title: "Open Source Contributor",
            description: "Sharing knowledge through community contributions"
        }
    ]

    return (
        <section id="role" className="h-screen snap-start flex items-center justify-center relative">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/[0.02] rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/[0.02] rounded-full blur-3xl" />
            </div>

            <div className="w-full px-4 relative z-10 max-w-6xl mx-auto">
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
                                Framework Developer
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
                            Passionate developer creating tools and frameworks that empower others. 
                            Building the future with clean code and innovative solutions.
                        </motion.p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                                    className="group"
                                >
                                    <div className="space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/50 hover:bg-white/70 hover:shadow-xl transition-all duration-300">
                                        {/* Icon */}
                                        <div className="flex justify-center">
                                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-8 h-8 text-orange-600" />
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-medium text-slate-900">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="pt-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => {
                                document.getElementById('framework')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            View My Framework
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
} 