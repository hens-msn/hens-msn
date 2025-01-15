"use client"

import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

export default function Hero() {
    const welcomeTexts = [
        "Yuk bikin sesuatu yg keren! ⚡",
        "Mari berkreasi bareng! 🚀",
        "Siap eksplor hal baru? 💫",
        "Let's build something cool! 🔥"
    ]

    const [currentTextIndex, setCurrentTextIndex] = useState(0)

    useEffect(() => {
        const quotes = document.querySelectorAll('.welcome-text');
        
        const rotateQuotes = () => {
            quotes.forEach((quote, index) => {
                if (index === currentTextIndex) {
                    (quote as HTMLElement).style.opacity = '1';
                    (quote as HTMLElement).style.transform = 'translateY(0)';
                } else {
                    (quote as HTMLElement).style.opacity = '0';
                    (quote as HTMLElement).style.transform = 'translateY(10px)';
                }
            });
            setCurrentTextIndex((prev) => (prev + 1) % welcomeTexts.length);
        };

        const interval = setInterval(rotateQuotes, 3000);
        return () => clearInterval(interval);
    }, [currentTextIndex, welcomeTexts.length]);

    return (
        <motion.div 
            id="hero"
            className="h-screen snap-start flex items-center justify-center"
        >
            <div className="flex flex-col items-center">
                {/* Profile Image */}
                <div className="relative w-48 h-48 md:w-[280px] md:h-[280px] group mb-8">
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-500 to-green-500 rounded-3xl rotate-6 opacity-75 blur-2xl group-hover:blur-3xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-500 to-green-500 rounded-3xl rotate-6" />
                    <video 
                        src="/hens-fire.mp4"
                        className={cn(
                            "relative object-cover rounded-3xl shadow-xl w-full h-full",
                            "transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1"
                        )}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <motion.div 
                        animate={{ 
                            y: [0, -10, 0],
                            rotate: [0, -5, 5, 0]
                        }}
                        transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-xl p-3 rounded-2xl shadow-lg"
                    >
                        <Sparkles className="w-6 h-6 text-yellow-300" />
                    </motion.div>
                </div>
                
                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-4">
                    Hendy Mamusung
                </h1>

                {/* Welcome Text */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                >
                    <div className="relative h-12 flex items-center justify-center">
                        {welcomeTexts.map((text, index) => (
                            <span
                                key={index}
                                className="welcome-text absolute text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 font-medium text-2xl transition-all duration-500"
                                style={{ 
                                    opacity: index === currentTextIndex ? 1 : 0,
                                    transform: index === currentTextIndex ? 'translateY(0)' : 'translateY(10px)',
                                    width: 'max-content'
                                }}
                            >
                                {text}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
} 