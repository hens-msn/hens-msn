import React from "react"
import { Home, User, Settings, UserCircle, BookOpen, Mail } from "lucide-react"

interface BottomTabBarProps {
    sections: string[]
    activeSection: string
    scrollToSection: (section: string) => void
}

const sectionIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    hero: Home,
    role: User, 
    framework: Settings,
    about: UserCircle,
    blog: BookOpen,
    contact: Mail
}

export default function BottomTabBar({ sections, activeSection, scrollToSection }: BottomTabBarProps) {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-3 py-3 shadow-2xl z-50" style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}>
            <div className="flex items-center justify-around max-w-lg mx-auto">
                {sections.map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`relative flex flex-col items-center gap-1.5 px-3 py-2 rounded-2xl transition-all duration-300 min-w-[60px] ${
                            activeSection === section 
                                ? "bg-orange-500/15 text-orange-600 shadow-sm" 
                                : "text-slate-500 hover:text-slate-700 hover:bg-slate-100/70 active:scale-95"
                        }`}
                        aria-label={`Go to ${section} section`}
                    >
                        <span className="text-lg">
                            {sectionIcons[section] ? 
                                React.createElement(sectionIcons[section], { 
                                    size: 20, 
                                    className: "transition-transform duration-300" + (activeSection === section ? " scale-110" : "")
                                }) : 
                                <BookOpen size={20} />
                            }
                        </span>
                        <span className={`text-xs font-medium capitalize transition-all duration-300 ${
                            activeSection === section ? "scale-105 text-orange-600" : "text-slate-600"
                        }`}>
                            {section === 'framework' ? 'Tools' : section}
                        </span>
                        
                        {/* Active indicator */}
                        {activeSection === section && (
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-orange-500 rounded-full" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
} 