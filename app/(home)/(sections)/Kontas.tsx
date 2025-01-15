"use client"

import { Code2, Sparkles, Users, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Kontas() {
    return (
        <div id="kontas" className="h-screen snap-start flex items-center justify-center">
            <div className="w-full px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto space-y-8"
                >
                    <span className="bg-gradient-to-r from-orange-500/20 to-green-500/20 text-white px-4 py-2 rounded-full text-sm font-medium border border-orange-500/30">
                        Introducing
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400">
                        Kontas Framework
                    </h2>
                    <p className="mt-6 text-lg sm:text-xl text-gray-400">
                        Framework web minimalis berbasis Bun yg fokus pada kesederhanaan & performa tinggi. Dibuat utk developer modern.
                    </p>
                </motion.div>

                <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                    <FeatureCard 
                        icon={<Code2 className="w-7 h-7 text-orange-400" />}
                        title="Simple & Powerful"
                        description="File-based routing, middleware & error handling 🎯"
                    />
                    <FeatureCard 
                        icon={<Sparkles className="w-7 h-7 text-yellow-400" />}
                        title="Enterprise Ready"
                        description="CSRF, rate limiting & security headers built-in 🔒"                    />
                    <FeatureCard 
                        icon={<Users className="w-7 h-7 text-green-400" />}
                        title="Developer First"
                        description="Hot reload, TypeScript & auto-completion 🚀"
                    />
                </div>

                <div className="mt-12 sm:mt-16 flex justify-center">
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://kontas.id" 
                        target="_blank"
                        className={cn(
                            "group inline-flex items-center gap-2",
                            "text-lg text-gray-400 hover:text-white transition-colors",
                            "border-b-2 border-transparent hover:border-orange-400/50 pb-1"
                        )}
                    >
                        Explore the possibilities
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

function FeatureCard({ icon, title, description }: {
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className={cn(
                "p-8 rounded-2xl transition-all",
                "bg-white/5 backdrop-blur-sm",
                "border border-white/10 hover:border-white/20"
            )}
        >
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 w-fit">
                {icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-400">{description}</p>
        </motion.div>
    )
} 