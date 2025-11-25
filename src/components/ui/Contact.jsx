import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import EarthCanvas from "../canvas/Earth";
import Section from "./Section";
import { useTranslation } from "../../context/TranslationContext";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const { copy } = useTranslation();
    const contactCopy = copy.contact;

    const infoIcons = [Mail, MapPin, Clock];

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
                name: "",
                email: "",
                message: "",
            });
        }, 1000);
    };

    return (
        <Section id="contact" className="flex flex-col gap-10 xl:flex-row">
            <motion.div
                initial={{ x: -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex-[0.75] glass-card rounded-[32px] p-8 border border-white/5 space-y-8'
            >
                <div>
                    <p className="text-secondary uppercase tracking-[0.3em] text-xs sm:text-sm">{contactCopy.label}</p>
                    <h3 className="text-white font-black md:text-[54px] sm:text-[42px] text-[32px]">{contactCopy.title}</h3>
                    <p className="text-white/70 text-base mt-3 max-w-xl">
                        {contactCopy.description}
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    {contactCopy.info.map(({ title, value, href }, index) => {
                        const Icon = infoIcons[index];
                        return (
                            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center gap-3">
                                    <Icon className="text-white/70" size={20} />
                                    <p className="text-white/60 text-xs uppercase tracking-[0.3em]">{title}</p>
                                </div>
                                {href ? (
                                    <a href={href} className="mt-3 block text-white font-medium hover:text-white/80 transition">{value}</a>
                                ) : (
                                    <p className="mt-3 text-white font-medium">{value}</p>
                                )}
                            </div>
                        )
                    })}
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-2 flex flex-col gap-6'
                >
                    <label className='flex flex-col gap-2'>
                        <span className='text-white font-medium'>{contactCopy.form.nameLabel}</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder={contactCopy.form.namePlaceholder}
                            className='bg-white/5 border border-white/10 py-4 px-5 placeholder:text-white/50 text-white rounded-2xl outline-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col gap-2'>
                        <span className='text-white font-medium'>{contactCopy.form.emailLabel}</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder={contactCopy.form.emailPlaceholder}
                            className='bg-white/5 border border-white/10 py-4 px-5 placeholder:text-white/50 text-white rounded-2xl outline-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col gap-2'>
                        <span className='text-white font-medium'>{contactCopy.form.messageLabel}</span>
                        <textarea
                            rows={6}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder={contactCopy.form.messagePlaceholder}
                            className='bg-white/5 border border-white/10 py-4 px-5 placeholder:text-white/50 text-white rounded-2xl outline-none font-medium resize-none'
                        />
                    </label>

                    <button
                        type='submit'
                        className='inline-flex items-center justify-center gap-2 bg-white text-primary py-3 px-8 rounded-full outline-none w-fit font-bold shadow-card transition hover:-translate-y-0.5'
                    >
                        {loading ? contactCopy.form.sending : contactCopy.form.button}
                    </button>
                </form>
            </motion.div>

            <motion.div
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] rounded-[32px] overflow-hidden border border-white/10'
            >
                <EarthCanvas />
            </motion.div>
        </Section>
    );
};

export default Contact;
