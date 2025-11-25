import { useEffect, useRef } from 'react'

const AnimatedText = ({ children, className = '', delay = 0 }) => {
    const textRef = useRef(null)

    useEffect(() => {
        const element = textRef.current
        if (!element) return

        const text = element.textContent
        element.textContent = ''
        
        const chars = text.split('')
        
        chars.forEach((char, index) => {
            const span = document.createElement('span')
            span.textContent = char
            span.style.display = 'inline-block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(20px)'
            span.style.transition = `opacity 0.5s ease ${delay + index * 0.03}s, transform 0.5s ease ${delay + index * 0.03}s`
            
            if (char === ' ') {
                span.style.width = '0.25em'
            }
            
            element.appendChild(span)
            
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    span.style.opacity = '1'
                    span.style.transform = 'translateY(0)'
                })
            })
        })
    }, [children, delay])

    return (
        <span ref={textRef} className={className}>
            {children}
        </span>
    )
}

export default AnimatedText

