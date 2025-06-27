interface NavigationDotsProps {
    sections: string[]
    activeSection: string
    scrollToSection: (section: string) => void
}

export default function NavigationDots({ sections, activeSection, scrollToSection }: NavigationDotsProps) {
    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
            {sections.map((section, index) => (
                <div key={section} className="relative group">
                    <button
                        onClick={() => scrollToSection(section)}
                        className={`relative w-1 h-8 rounded-full transition-all duration-500 backdrop-blur-sm ${
                            activeSection === section 
                                ? "bg-orange-500 shadow-lg scale-110" 
                                : "bg-slate-300/50 group-hover:bg-slate-400/70 group-hover:scale-105"
                        }`}
                        aria-label={`Scroll to ${section} section`}
                    />
                    
                    {/* Section label on hover */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-slate-200/50 text-xs font-medium text-slate-700 capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        {section}
                    </div>
                </div>
            ))}
        </div>
    )
} 