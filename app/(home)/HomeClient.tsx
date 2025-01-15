"use client"

import NavigationDots from "./(ui)/NavigationDots"
import { useSection } from "./useSection"
import FloatingInput from "./(ui)/FloatingInput"

export default function HomeClient({ children }: { children: React.ReactNode }) {
    const { sections, activeSection, scrollToSection } = useSection()

    return (
        <main className="relative h-[100dvh] bg-slate-950 text-white overflow-y-scroll snap-y snap-mandatory scrollbar-none">
            {/* Gradient Background */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(234,88,12,0.2),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(22,163,74,0.2),transparent_50%)]" />
            
            <div className="container relative mx-auto px-4 py-8 sm:py-16 max-w-6xl">
                {children}
            </div>

            <NavigationDots 
                sections={sections}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
            />

            <FloatingInput />
        </main>
    )
} 