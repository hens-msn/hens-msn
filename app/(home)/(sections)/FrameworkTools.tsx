"use client"

import { Code2, Terminal, GitBranch, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function FrameworkTools() {
    const tools = [
        {
            icon: Code2,
            name: "Kontas Framework",
            description: "Minimalist web framework built on Bun with file-based routing and enterprise security",
            features: ["File-based routing", "CSRF protection", "TypeScript support"],
            url: "https://kontas.id"
        },
        {
            icon: Terminal,
            name: "Henotic CLI",
            description: "Backend generator supporting TypeScript, Go, Rust, PHP, and Java with modern architecture",
            features: ["Multi-language", "Clean architecture", "Auto-generation"],
            url: "https://github.com/henotic/henotic-cli"
        },
        {
            icon: GitBranch,
            name: "Henotic GitCo",
            description: "Git workflow acceleration tool for faster commits and streamlined version control",
            features: ["Fast commits", "Auto-staging", "Workflow optimization"],
            url: "https://github.com/henotic/henotic-gitco"
        }
    ]

    return (
        <section id="framework" className="h-screen snap-start flex items-center justify-center relative">
            <div className="w-full px-4 relative z-10 max-w-5xl mx-auto">
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
                                Framework & Tools
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
                            Developer tools and frameworks designed to accelerate development workflow 
                            and improve code quality across multiple languages and platforms.
                        </motion.p>
                    </div>

                    {/* Tools Grid - Minimalist */}
                    <div className="grid lg:grid-cols-3 gap-16">
                        {tools.map((tool, index) => {
                            const IconComponent = tool.icon
                            return (
                                <motion.div
                                    key={tool.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                                    className="group space-y-4"
                                >
                                    <motion.a
                                        href={tool.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -2 }}
                                        className="block space-y-4 cursor-pointer"
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
                                        <div className="space-y-3 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-lg font-light text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                                                    {tool.name}
                                                </h3>
                                                <ExternalLink className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                            </div>
                                            <p className="text-sm text-slate-500 leading-relaxed font-light max-w-xs mx-auto">
                                                {tool.description}
                                            </p>
                                            
                                            {/* Minimal Features */}
                                            <div className="space-x-1 text-xs text-slate-400 font-light">
                                                {tool.features.map((feature, idx) => (
                                                    <span key={idx}>
                                                        {feature}
                                                        {idx < tool.features.length - 1 && " • "}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.a>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Minimal CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="pt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm hover:bg-slate-50"
                            onClick={() => {
                                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            Learn More About Me
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