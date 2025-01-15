import { cn } from "@/lib/utils"

interface NavigationDotsProps {
    sections: string[]
    activeSection: string
    scrollToSection: (section: string) => void
}

export default function NavigationDots({ sections, activeSection, scrollToSection }: NavigationDotsProps) {
    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            {sections.map((section) => (
                <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={cn(
                        "w-3 h-3 rounded-full transition-all",
                        activeSection === section 
                            ? "bg-white scale-125" 
                            : "bg-white/50 hover:bg-white/75"
                    )}
                    aria-label={`Scroll to ${section} section`}
                />
            ))}
        </div>
    )
} 