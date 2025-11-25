import { Github, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-scroll'
import { useTranslation } from '../../context/TranslationContext'

const socials = [
    { icon: Github, href: 'https://github.com/hamozoni', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hamozoni', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/hamozoni', label: 'Twitter' },
]

const Footer = () => {
    const year = new Date().getFullYear()
    const { copy } = useTranslation()
    const footerCopy = copy.footer
    const navCopy = copy.nav
    const navLinks = [
        { to: 'hero', label: navCopy.hero },
        { to: 'about', label: navCopy.about },
        { to: 'experience', label: navCopy.experience },
        { to: 'projects', label: navCopy.projects },
        { to: 'contact', label: navCopy.contact },
    ]

    return (
        <footer className="mt-24 border-t border-white/10 backdrop-blur" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 80%, transparent)' }}>
            <div className="max-w-7xl mx-auto px-6 sm:px-16 py-10 flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
                    <div className="space-y-3 max-w-xl">
                        <p className="text-white text-2xl font-semibold">Hamozoni</p>
                        <p className="text-white/70 text-sm leading-relaxed">
                            {footerCopy.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-white/70">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.to}
                                smooth
                                duration={500}
                                className="cursor-pointer hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="p-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/40 transition"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-white/50">
                    <p>{footerCopy.copyright(year)}</p>
                    <p>{footerCopy.availability}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

