import { useState, useEffect } from 'react'

export default function TypewriterText({ text, speed = 100, delay = 2000 }) {
    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        let timeout

        if (!isDeleting && index < text.length) {
            timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, index + 1))
                setIndex(index + 1)
            }, speed)
        } else if (!isDeleting && index === text.length) {
            // Wait before deleting
            timeout = setTimeout(() => {
                setIsDeleting(true)
            }, delay)
        } else if (isDeleting && index > 0) {
            timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, index - 1))
                setIndex(index - 1)
            }, speed)
        } else if (isDeleting && index === 0) {
            // Restart typing after deleting
            setIsDeleting(false)
        }

        return () => clearTimeout(timeout)
    }, [index, isDeleting, text, speed, delay])

    return (
        <span className="blue-gradient_text">
            {displayedText}
            <span className="animate-pulse text-[var(--text-body)]">|</span>
        </span>
    )
}
