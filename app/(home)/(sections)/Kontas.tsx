"use client"

import { Code2, Sparkles, Users, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Kontas() {
    return (
        <div id="kontas" className="h-screen snap-start flex items-center justify-center">
            <div className="w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto space-y-4"
                >
                    <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20">
                        Introducing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold">Kontas Framework</h2>
                    <p className="mt-6 text-xl text-gray-400">
                        Framework modern utk React developers yg pengen bikin apps dgn cepat & efisien
                    </p>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <FeatureCard 
                        icon={<Code2 className="w-7 h-7 text-blue-400" />}
                        title="Modern Stack"
                        description="Built dgn TypeScript, React 18, & teknologi modern lainnya"
                    />
                    <FeatureCard 
                        icon={<Sparkles className="w-7 h-7 text-purple-400" />}
                        title="Developer Experience"
                        description="Zero config, auto-complete, & type safety out of the box"
                    />
                    <FeatureCard 
                        icon={<Users className="w-7 h-7 text-pink-400" />}
                        title="Active Community"
                        description="Join 1000+ developers yg udh pake Kontas Framework"
                    />
                </div>

                <div className="mt-16 flex justify-center">
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://kontas.id" 
                        target="_blank"
                        className={cn(
                            "group flex items-center gap-3 px-10 py-5 rounded-full font-medium",
                            "bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500",
                            "hover:opacity-90 transition-all"
                        )}
                    >
                        Visit Kontas.id
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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