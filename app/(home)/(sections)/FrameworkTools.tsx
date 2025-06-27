"use client"

import { Code2, Terminal, GitBranch, Zap, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function FrameworkTools() {
    const tools = [
        {
            icon: Code2,
            name: "Kontas Framework",
            description: "Minimalist web framework built on Bun with file-based routing and enterprise security",
            features: ["File-based routing", "CSRF protection", "TypeScript support"],
            color: "from-orange-500 to-red-500",
            url: "https://kontas.id"
        },
        {
            icon: Terminal,
            name: "Henotic CLI",
            description: "Backend generator supporting TypeScript, Go, Rust, PHP, and Java with modern architecture",
            features: ["Multi-language", "Clean architecture", "Auto-generation"],
            color: "from-blue-500 to-cyan-500",
            url: "https://github.com/henotic/henotic-cli"
        },
        {
            icon: GitBranch,
            name: "Henotic GitCo",
            description: "Git workflow acceleration tool for faster commits and streamlined version control",
            features: ["Fast commits", "Auto-staging", "Workflow optimization"],
            color: "from-green-500 to-emerald-500",
            url: "https://github.com/henotic/henotic-gitco"
        }
    ]

    return (
        <section id="framework" className="h-screen snap-start flex items-center justify-center relative">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-orange-500/[0.02] rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-red-500/[0.02] rounded-full blur-3xl" />
            </div>

            <div className="w-full px-4 relative z-10 max-w-7xl mx-auto">
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full border border-orange-500/20 mb-6">
                                <Zap className="w-4 h-4 text-orange-500" />
                                <span className="text-sm font-medium text-orange-600">My Creations</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4">
                                Framework & Tools
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
                            Developer tools and frameworks designed to accelerate development workflow 
                            and improve code quality across multiple languages and platforms.
                        </motion.p>
                    </div>

                    {/* Tools Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {tools.map((tool, index) => {
                            const IconComponent = tool.icon
                            return (
                                <motion.div
                                    key={tool.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                                    className="group"
                                >
                                    <motion.a
                                        href={tool.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5 }}
                                        className="block h-full p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/50 hover:bg-white/70 hover:shadow-xl transition-all duration-300 cursor-pointer"
                                    >
                                        {/* Icon */}
                                        <div className="flex justify-center mb-6">
                                            <div className="w-16 h-16 rounded-xl bg-slate-100/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-8 h-8 text-slate-500" />
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="space-y-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-semibold text-slate-900">
                                                    {tool.name}
                                                </h3>
                                                <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                {tool.description}
                                            </p>
                                            
                                            {/* Features */}
                                            <div className="space-y-2">
                                                {tool.features.map((feature, idx) => (
                                                    <div key={idx} className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600 mx-1">
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.a>
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
                                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            Learn More About Me
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
} 