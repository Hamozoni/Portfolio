import { motion } from 'framer-motion'

const Section = ({ children, id, className = '' }) => {
    return (
        <section
            id={id}
            className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 scroll-mt-24 ${className}`}
        >
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
            >
                {children}
            </motion.div>
        </section>
    )
}

export default Section
