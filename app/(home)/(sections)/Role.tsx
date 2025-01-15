"use client"

import { motion } from "framer-motion"
import { Code2, Cpu, Sparkles } from "lucide-react"

export default function Role() {
    return (
        <div id="role" className="h-screen snap-start flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <Code2 className="w-96 h-96 rotate-12" />
            </div>
            <motion.div 
                className="absolute top-20 left-20 w-24 h-24 rounded-full bg-orange-500/10"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
            />
            <motion.div 
                className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-green-500/10"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
            />

            {/* Floating Icons */}
            <motion.div 
                className="absolute top-1/4 left-10"
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                }}
            >
                <Cpu className="w-8 h-8 text-orange-400/20" />
            </motion.div>
            <motion.div 
                className="absolute bottom-1/4 right-10"
                animate={{
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
            >
                <Sparkles className="w-8 h-8 text-green-400/20" />
            </motion.div>

            {/* Main Content */}
            <div className="w-full px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto space-y-8"
                >
                    <span className="block text-3xl sm:text-4xl bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent font-bold">
                        Framework Developer
                    </span>
                    
                    <div className="space-y-6">
                        <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                            Seorang developer yg passionate dlm menciptakan tools & framework utk mempermudah developer lain. 
                            Creator of <span className="font-semibold text-white">Kontas Framework</span> 🚀
                        </p>

                        <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                            Memaksimalkan potensi AI & teknologi modern utk mempercepat development process & 
                            menghasilkan solusi berkualitas tinggi. Menerapkan AI-driven development utk 
                            meningkatkan efisiensi tanpa mengorbankan kualitas code.
                        </p>

                        <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                            Aktif berkontribusi di komunitas open source & senang berbagi knowledge dgn 
                            developer lain melalui artikel, workshop & mentoring. Percaya bhw teknologi 
                            hrs membuat hidup developer lebih mudah, bukan sebaliknya.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
} 