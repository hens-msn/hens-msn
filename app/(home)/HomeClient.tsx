"use client"

import React, { useRef } from "react"
import NavigationDots from "@/components/NavigationDots"
import BottomTabBar from "@/components/BottomTabBar"
import { useSection } from "@/hooks/useSection"

export default function HomeClient({ children }: { children: React.ReactNode }) {
    const { sections, activeSection, scrollToSection, isMobile, setActiveSectionManually } = useSection()
    const mobileContainerRef = useRef<HTMLDivElement>(null)

    const scrollToMobileSection = (section: string) => {
        if (!mobileContainerRef.current) return
        
        const sectionIndex = sections.indexOf(section)
        const container = mobileContainerRef.current
        const sectionWidth = container.clientWidth
        
        container.scrollTo({
            left: sectionIndex * sectionWidth,
            behavior: 'smooth'
        })
    }

    const handleMobileScroll = () => {
        if (!mobileContainerRef.current) return
        
        const container = mobileContainerRef.current
        const sectionWidth = container.clientWidth
        const currentIndex = Math.round(container.scrollLeft / sectionWidth)
        
        // Update active section based on scroll position
        if (sections[currentIndex] && sections[currentIndex] !== activeSection) {
            setActiveSectionManually(sections[currentIndex])
        }
    }

    if (isMobile) {
        return (
            <main className="relative h-[100dvh] bg-white text-slate-900">
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
                
                {/* Mobile Horizontal Scroll Container */}
                <div 
                    ref={mobileContainerRef}
                    className="h-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-none"
                    onScroll={handleMobileScroll}
                >
                    <div className="flex h-full">
                        {React.Children.map(children, (child, index) => (
                            <div 
                                key={index}
                                className="min-w-full h-full snap-center overflow-y-auto"
                                style={{ paddingBottom: '100px' }}
                            >
                                <div className="min-h-full flex flex-col justify-center px-4 py-8">
                                    <div className="container mx-auto max-w-6xl">
                                        {child}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <BottomTabBar 
                    sections={sections}
                    activeSection={activeSection}
                    scrollToSection={scrollToMobileSection}
                />
            </main>
        )
    }

    // Desktop Layout
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
        </main>
    )
} 