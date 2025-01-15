"use client"

import { Github, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import SocialButton from "../(ui)/SocialButton"

export default function Role() {
    return (
        <div id="role" className="h-screen snap-start flex items-center justify-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl"
            >
                <span className="block text-4xl bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent font-bold mb-6">
                    Framework Developer
                </span>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                    Passionate developer yg suka bikin tools utk mempermudah developer lain. Creator of{" "}
                    <span className="font-semibold text-white">Kontas Framework</span> 🚀
                </p>

                {/* Social Buttons */}
                <div className="flex gap-4 justify-center">
                    <SocialButton href="https://github.com/hens-msn" variant="primary">
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                    </SocialButton>
                    <SocialButton href="https://x.com/hendymsn" variant="secondary">
                        <Twitter className="w-5 h-5" />
                        <span>Twitter</span>
                    </SocialButton>
                </div>
            </motion.div>
        </div>
    )
} 