"use client"

import { motion } from "framer-motion"

export default function About() {
    return (
        <div id="about" className="h-screen snap-start flex items-center justify-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto space-y-4"
            >
                <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20">
                    About Me
                </span>
                <h2 className="text-4xl font-bold">My Journey 🚀</h2>
                <p className="mt-6 text-xl text-gray-400 leading-relaxed">
                    Seorang developer yg passionate dlm bikin tools & framework utk mempermudah developer lain. 
                    Dgn background di React ecosystem, aku fokus utk bikin developer experience yg lbh baik.
                </p>
            </motion.div>
        </div>
    )
} 