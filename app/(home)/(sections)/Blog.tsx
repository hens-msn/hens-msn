"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Blog() {
    return (
        <div id="blog" className="h-screen snap-start flex items-center justify-center">
            <div className="w-full px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto space-y-8"
                >
                    <span className="bg-gradient-to-r from-orange-500/20 to-green-500/20 text-white px-4 py-2 rounded-full text-sm font-medium border border-orange-500/30">
                        Blog
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400">
                        Featured Articles ✍️
                    </h2>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <ArticleCard 
                        title="Building Modern Web Framework"
                        date="Mar 15, 2024"
                        desc="Tips & tricks dlm membangun framework yg modern & developer-friendly"
                        link="#"
                    />
                    <ArticleCard 
                        title="React Performance Tips"
                        date="Mar 10, 2024"
                        desc="Optimize React apps utk performa maksimal & user experience terbaik"
                        link="#"
                    />
                </div>
            </div>
        </div>
    )
}

function ArticleCard({ title, date, desc, link }: {
    title: string
    date: string
    desc: string
    link: string
}) {
    return (
        <motion.a
            href={link}
            whileHover={{ scale: 1.02 }}
            className={cn(
                "block p-8 rounded-2xl transition-all",
                "bg-white/5 backdrop-blur-sm",
                "border border-white/10 hover:border-white/20"
            )}
        >
            <div className="text-sm text-gray-400">{date}</div>
            <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-4 text-gray-400">{desc}</p>
        </motion.a>
    )
} 