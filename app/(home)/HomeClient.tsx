"use client"

import NavigationDots from "./(ui)/NavigationDots"
import { useSection } from "./useSection"
// import FloatingInput from "./(ui)/FloatingInput"

export default function HomeClient({ children }: { children: React.ReactNode }) {
    const { sections, activeSection, scrollToSection } = useSection()

    return (
        <main className="relative h-[100dvh] bg-white text-slate-900 overflow-y-scroll snap-y snap-mandatory scrollbar-none">
            {/* Minimal Grid Background */}
            <div className="fixed inset-0 opacity-[0.02]" style={{
                backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
            }} />
            
            {/* Subtle Orange Accent */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.03),transparent_70%)]" />
            
            <div className="container relative mx-auto px-4 py-8 sm:py-16 max-w-6xl">
                {children}
            </div>

            <NavigationDots 
                sections={sections}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
            />

            {/* FloatingInput - Disabled for now */}
            {/* <FloatingInput /> */}
        </main>
    )
} 