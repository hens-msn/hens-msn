import { cn } from "@/lib/utils"

interface NavigationDotsProps {
    sections: string[]
    activeSection: string
    scrollToSection: (section: string) => void
}

export default function NavigationDots({ sections, activeSection, scrollToSection }: NavigationDotsProps) {
    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            {sections.map((section) => (
                <div key={section} className="relative group">
                    <button
                        onClick={() => scrollToSection(section)}
                        className={cn(
                            "relative w-2 h-2 rounded-full transition-all duration-300",
                            activeSection === section 
                                ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)] scale-125" 
                                : "bg-white/20 group-hover:bg-white/40"
                        )}
                        aria-label={`Scroll to ${section} section`}
                    />
                </div>
            ))}
        </div>
    )
} 