"use client"

import { motion } from "framer-motion"
import { Clock, ArrowUpRight } from "lucide-react"

export default function Blog() {
    const articles = [
        {
            title: "Building Modern Web Framework",
            date: "March 2024",
            desc: "Deep dive into creating developer-friendly frameworks with modern architecture and clean APIs",
            readTime: "5 min read",
            tag: "Framework",
            link: "#"
        },
        {
            title: "AI-Powered Development", 
            date: "March 2024",
            desc: "How to leverage AI tools effectively while maintaining code quality and technical control",
            readTime: "4 min read",
            tag: "AI & Dev",
            link: "#"
        },
        {
            title: "Clean Code Philosophy",
            date: "February 2024",
            desc: "Principles of writing maintainable code that stands the test of time in any project",
            readTime: "6 min read",
            tag: "Best Practices",
            link: "#"
        }
    ]

    return (
        <section id="blog" className="min-h-screen md:h-screen snap-start flex items-center justify-center relative py-16 md:py-0">
            <div className="w-full px-4 relative z-10 max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-16"
                >
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4">
                                Blog & Articles
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
                            Sharing insights on modern development, clean code practices, and building better software.
                        </motion.p>
                    </div>

                    {/* Articles Grid - Minimalist */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        {articles.map((article, index) => (
                            <motion.div
                                key={article.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                                className="group"
                            >
                                <motion.a
                                    href={article.link}
                                    whileHover={{ y: -2 }}
                                    className="flex flex-col h-full cursor-pointer"
                                >
                                    {/* Content */}
                                    <div className="flex-1 space-y-3">
                                        {/* Tag & Arrow */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-slate-400 font-light">
                                                {article.tag}
                                            </span>
                                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300" />
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-lg font-light text-slate-900 leading-tight group-hover:text-slate-700 transition-colors duration-300">
                                            {article.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-sm text-slate-500 leading-relaxed font-light">
                                            {article.desc}
                                        </p>
                                    </div>
                                    
                                    {/* Meta - Always at bottom */}
                                    <div className="flex items-center justify-between text-xs text-slate-400 font-light mt-6 pt-3 border-t border-slate-100">
                                        <span>{article.date}</span>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>
                                </motion.a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Minimal CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center pt-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm hover:bg-slate-50"
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Minimal scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="hidden md:block absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
            </motion.div>
        </section>
    )
} 