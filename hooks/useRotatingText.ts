import { useState, useEffect } from "react"

interface UseRotatingTextProps {
    texts: string[]
    interval?: number
}

export const useRotatingText = ({ texts, interval = 3000 }: UseRotatingTextProps) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)

    useEffect(() => {
        const quotes = document.querySelectorAll('.rotating-text')
        
        const rotateQuotes = () => {
            quotes.forEach((quote, index) => {
                const element = quote as HTMLElement
                if (index === currentTextIndex) {
                    element.style.opacity = "1"
                    element.style.transform = "translateY(0)"
                } else {
                    element.style.opacity = "0"
                    element.style.transform = "translateY(10px)"
                }
            })
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }

        const intervalId = setInterval(rotateQuotes, interval)
        return () => clearInterval(intervalId)
    }, [currentTextIndex, texts.length, interval])

    return { currentTextIndex }
}