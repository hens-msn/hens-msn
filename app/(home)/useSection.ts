import { useState, useEffect, useRef, useMemo } from "react"

export const useSection = () => {
    const sections = useMemo(() => [
        "hero",
        "role",
        "kontas",
        "about",
        "blog",
        "contact"
    ], [])
    
    const [activeSection, setActiveSection] = useState(sections[0])
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        // Setup intersection observer
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, {
            threshold: 0.5
        })

        // Observe all sections
        sections.forEach((section) => {
            const element = document.getElementById(section)
            if (element) observerRef.current?.observe(element)
        })

        return () => observerRef.current?.disconnect()
    }, [sections])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const currentIndex = sections.indexOf(activeSection)
            
            if (e.key === "ArrowDown" && currentIndex < sections.length - 1) {
                document.getElementById(sections[currentIndex + 1])?.scrollIntoView({ behavior: "smooth" })
            } else if (e.key === "ArrowUp" && currentIndex > 0) {
                document.getElementById(sections[currentIndex - 1])?.scrollIntoView({ behavior: "smooth" })
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [sections, activeSection])

    const scrollToSection = (section: string) => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
    }

    return {
        sections,
        activeSection,
        scrollToSection
    }
} 