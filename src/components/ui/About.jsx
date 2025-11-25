import React from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { useTranslation } from '../../context/TranslationContext'

const ServiceCard = ({ index, title, description }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className='w-full sm:w-[300px]'
    >
        <div className='green-pink-gradient p-[1px] rounded-[24px] shadow-card h-full'>
            <div className='glass-card rounded-[24px] px-8 py-10 flex flex-col gap-4 h-full'>
                <h3 className='text-white text-2xl font-semibold text-left'>
                    {title}
                </h3>
                <p className='text-white/70 text-sm leading-relaxed'>{description}</p>
            </div>
        </div>
    </motion.div>
)

const About = () => {
    const { copy } = useTranslation()
    const aboutCopy = copy.about

    return (
        <Section id="about" className="space-y-12">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
            >
                <p className="text-secondary uppercase tracking-[0.3em] text-xs sm:text-sm">{aboutCopy.introLabel}</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[48px] text-[36px]">{aboutCopy.overviewTitle}</h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-secondary text-lg max-w-3xl leading-[32px]'
            >
                {aboutCopy.body}
            </motion.p>

            <div className='flex flex-wrap gap-8'>
                {aboutCopy.services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

            <div className="glass-card rounded-3xl p-8 space-y-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-white/60">{aboutCopy.toolbeltLabel}</p>
                        <h3 className="text-2xl text-white font-semibold">{aboutCopy.toolbeltTitle}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {aboutCopy.skills.map((skill) => (
                            <span key={skill} className="px-4 py-2 rounded-full border border-white/10 text-white/80 text-sm bg-white/5">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {aboutCopy.principles.map((principle) => (
                        <div key={principle.title} className="glass-card rounded-2xl p-5">
                            <h4 className="text-white text-lg font-semibold mb-2">{principle.title}</h4>
                            <p className="text-white/70 text-sm leading-relaxed">{principle.copy}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default About
