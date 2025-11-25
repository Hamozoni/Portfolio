import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Section from "./Section";
import { useTranslation } from "../../context/TranslationContext";
import { useTheme } from "../../context/ThemeContext";
import { hexToRgba } from "../../utils/color";

const ProjectCard = ({ index, name, description, tags, image, live, source, accent, labels }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="w-full sm:w-[360px]"
        >
            <Tilt
                options={{
                    max: 25,
                    scale: 1.02,
                    speed: 400,
                }}
                className='border border-white/5 rounded-3xl overflow-hidden shadow-card'
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-card) 95%, transparent)' }}
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-4 gap-3">
                        <a
                            href={live}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold"
                        >
                            {labels.viewLive}
                        </a>
                        <a
                            href={source}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10"
                        >
                            {labels.viewSource}
                        </a>
                    </div>
                </div>

                <div className='p-6 space-y-4'>
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-white/50">{labels.caseStudy}</p>
                        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    </div>
                    <p className='text-secondary text-[15px] leading-relaxed'>
                        {description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                        {tags.map((tag) => (
                            <span
                                key={`${name}-${tag}`}
                                className="text-[13px] px-3 py-1 rounded-full border text-white/80"
                                style={{
                                    borderColor: hexToRgba(accent, 0.3),
                                    color: hexToRgba(accent, 0.9),
                                }}
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Projects = () => {
    const { copy } = useTranslation()
    const { activeTheme } = useTheme()
    const accent = activeTheme.meta.accent
    const projectsSection = copy.projects

    return (
        <Section id="projects" className="space-y-12">
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
            >
                <p className="text-secondary uppercase tracking-[0.3em] text-xs sm:text-sm">{projectsSection.label}</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[48px] text-[36px]">{projectsSection.title}</h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-secondary text-lg max-w-3xl leading-[32px]'
            >
                {projectsSection.intro}
            </motion.p>

            <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3 place-items-stretch'>
                {projectsSection.items.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        accent={accent}
                        labels={{
                            viewLive: projectsSection.viewLive,
                            viewSource: projectsSection.viewSource,
                            caseStudy: projectsSection.caseStudyLabel,
                        }}
                        {...project}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
