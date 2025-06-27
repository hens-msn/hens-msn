"use client"

import { motion } from "framer-motion"
import { BookOpen, Clock, ArrowUpRight } from "lucide-react"

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
        <section id="blog" className="h-screen snap-start flex items-center justify-center relative">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-orange-500/[0.02] rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-red-500/[0.02] rounded-full blur-3xl" />
            </div>

            <div className="w-full px-4 relative z-10 max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full border border-orange-500/20 mb-6">
                                <BookOpen className="w-4 h-4 text-orange-500" />
                                <span className="text-sm font-medium text-orange-600">Latest Thoughts</span>
                            </div>
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
                            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            Sharing insights on modern development, clean code practices, and building better software.
                        </motion.p>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid lg:grid-cols-3 gap-6">
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
                                    whileHover={{ y: -8 }}
                                    className="flex flex-col h-full rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/60 hover:bg-white/80 hover:shadow-2xl hover:border-orange-300/50 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Card Header */}
                                    <div className="p-6 flex-1 space-y-4">
                                        {/* Tag & Arrow */}
                                        <div className="flex items-center justify-between">
                                            <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded">
                                                {article.tag}
                                            </span>
                                            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300" />
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-slate-900 leading-tight group-hover:text-orange-700 transition-colors">
                                            {article.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {article.desc}
                                        </p>
                                    </div>
                                    
                                    {/* Card Footer - Always at bottom */}
                                    <div className="px-6 pb-6 pt-4 border-t border-slate-100 mt-auto">
                                        <div className="flex items-center justify-between text-xs text-slate-500">
                                            <span>{article.date}</span>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center pt-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
} 