import { motion } from 'framer-motion'
import { useTranslation } from '../../context/TranslationContext'
import { useTheme } from '../../context/ThemeContext'
import { hexToRgba } from '../../utils/color'
import AnimatedText from './AnimatedText'

const Hero = () => {
    const { copy } = useTranslation()
    const heroCopy = copy.hero
    const { activeTheme } = useTheme()
    const accent = activeTheme.meta.accent

    return (
        <section id="hero" className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
            <div
                className="absolute -left-10 top-1/4 hidden xl:block h-72 w-72 rounded-full blur-[140px]"
                style={{ backgroundColor: hexToRgba(accent, 0.3) }}
            />
            <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 pt-32 lg:pt-40 flex flex-col gap-12">
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full glow-dot" style={{ backgroundColor: accent }} />
                        <div className="w-1 sm:h-80 h-40 violet-gradient" />
                    </div>

                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="uppercase tracking-[0.3em] text-white/70 text-xs sm:text-sm"
                        >
                            {heroCopy.tagline}
                        </motion.p>
                        <h1 className="font-black text-white lg:text-[86px] sm:text-[68px] xs:text-[52px] text-[40px] leading-tight">
                            <AnimatedText delay={0.2}>
                                {heroCopy.heading}{' '}
                            </AnimatedText>
                            <span style={{ color: accent }}>
                                <AnimatedText delay={0.4}>
                                    {heroCopy.highlight}
                                </AnimatedText>
                            </span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-white/80 text-lg sm:text-xl max-w-2xl leading-relaxed"
                        >
                            {heroCopy.description}
                        </motion.p>

                        <div className="flex flex-wrap items-center gap-4">
                            <a href="#experience" className="inline-flex items-center justify-center rounded-full bg-white text-primary font-semibold px-6 py-3 text-sm sm:text-base transition hover:translate-y-0.5">
                                {heroCopy.ctas.primary}
                            </a>
                            <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm sm:text-base text-white/90 font-medium hover:bg-white/10 transition">
                                {heroCopy.ctas.secondary}
                            </a>
                            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base text-white/70 font-medium hover:text-white transition">
                                {heroCopy.ctas.tertiary}
                            </a>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-card rounded-3xl px-6 sm:px-8 py-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center border border-white/5"
                >
                    <div
                        className="rounded-2xl px-5 py-4 border"
                        style={{
                            backgroundColor: hexToRgba(accent, 0.15),
                            borderColor: hexToRgba(accent, 0.4),
                        }}
                    >
                        <p className="text-white font-semibold text-lg">{heroCopy.current.title}</p>
                        <p className="text-white/70 text-sm">{heroCopy.current.description}</p>
                    </div>
                    <div className="hidden sm:block w-px h-16 bg-white/10" />
                    <div className="flex flex-wrap gap-4 text-sm text-white/80">
                        {heroCopy.current.stack.map((tech) => (
                            <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {heroCopy.stats.map((item, idx) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            className="rounded-2xl border border-white/5 bg-white/5 backdrop-blur text-white px-5 py-6 flex flex-col gap-2"
                        >
                            <span className="text-3xl font-bold">{item.value}</span>
                            <span className="text-sm uppercase tracking-wide text-white/60">{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center">
                <a href="#about" className="group inline-flex items-center justify-center">
                    <div className="w-[40px] h-[70px] rounded-full border-2 border-white/60 flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-3 h-3 rounded-full bg-white mb-1"
                        />
                    </div>
                    <span className="ml-4 text-white/70 uppercase tracking-[0.3em] text-xs">{heroCopy.scrollLabel}</span>
                </a>
            </div>
        </section>
    )
}

export default Hero
