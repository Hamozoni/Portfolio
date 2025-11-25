import { motion } from 'framer-motion'
import Section from './Section'
import { useTranslation } from '../../context/TranslationContext'

const Experience = () => {
    const { copy } = useTranslation()
    const experienceCopy = copy.experience
    const timeline = experienceCopy.timeline

    return (
        <Section id="experience" className="space-y-12">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
            >
                <p className="text-secondary uppercase tracking-[0.3em] text-xs sm:text-sm">{experienceCopy.label}</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[48px] text-[36px]">{experienceCopy.title}</h2>
            </motion.div>

            <div className="relative pl-4 sm:pl-8">
                <span
                    aria-hidden
                    className="absolute left-2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/40 via-white/10 to-transparent"
                />

                <div className="space-y-10">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative pl-10"
                        >
                            <span
                                aria-hidden
                                className="absolute left-[3px] top-5 w-3 h-3 rounded-full bg-white shadow-card"
                            />
                            {index !== timeline.length - 1 && (
                                <span
                                    aria-hidden
                                    className="absolute left-[4px] top-8 bottom-0 w-[1px] bg-white/10"
                                />
                            )}

                            <div className="glass-card rounded-[28px] border border-white/10 p-6 sm:p-8 space-y-4">
                                <div className="flex flex-wrap items-center gap-4 justify-between">
                                    <p className="text-white/60 text-xs uppercase tracking-[0.3em]">{item.period}</p>
                                    <span className="px-4 py-1 rounded-full bg-white/10 text-xs text-white/80 border border-white/10">
                                        {item.company}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
                                    <p className="text-white/70 mt-2">{item.summary}</p>
                                </div>
                                <ul className="list-disc list-inside space-y-2 text-white/80 text-sm">
                                    {item.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-3">
                                    {item.stack.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Experience

