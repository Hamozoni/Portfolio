import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { useTranslation } from "../../context/TranslationContext";
import { useTheme } from "../../context/ThemeContext";

const ReviewCard = ({ index, name, role, company, image, testimonial }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="glass-card p-8 rounded-3xl w-full sm:w-[320px] flex flex-col justify-between"
    >
        <div>
            <div className="text-white text-[48px] font-serif leading-none opacity-20 mb-4">"</div>
            <p className="text-white/80 text-[16px] leading-[28px] italic mb-6">
                {testimonial}
            </p>
        </div>

        <div className="flex items-center gap-4 mt-auto">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10">
                <img
                    src={image}
                    alt={`feedback-by-${name}`}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col">
                <p className="text-white font-medium text-[16px]">
                    <span className="blue-text-gradient">@</span> {name}
                </p>
                <p className="text-secondary text-[12px] uppercase tracking-wider">
                    {role} of {company}
                </p>
            </div>
        </div>
    </motion.div>
);

const Reviews = () => {
    const { copy } = useTranslation();
    const reviewsSection = copy.reviews;

    return (
        <Section id="reviews" className="space-y-12">
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3 bg-transparent"
            >
                <p className="text-secondary uppercase tracking-[0.3em] text-xs sm:text-sm">
                    {reviewsSection.label}
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[48px] text-[36px]">
                    {reviewsSection.title}
                </h2>
            </motion.div>

            <div className="flex flex-wrap gap-7 justify-center xl:justify-start">
                {reviewsSection.items.map((review, index) => (
                    <ReviewCard key={`review-${index}`} index={index} {...review} />
                ))}
            </div>
        </Section>
    );
};

export default Reviews;
