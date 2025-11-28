import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import { useTranslation } from '../../context/TranslationContext'
import ThemeSwitcher from './ThemeSwitcher'
import LanguageSwitcher from './LanguageSwitcher';



import logo from '../../assets/1763919627757.jpeg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { copy } = useTranslation()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { name: copy.nav.about, to: 'about' },
        { name: copy.nav.experience, to: 'experience' },
        { name: copy.nav.projects, to: 'projects' },
        { name: copy.nav.reviews, to: 'reviews' },
        { name: copy.nav.contact, to: 'contact' },
    ]

    return (
        <nav
            className={`w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg shadow-card' : 'bg-transparent'
                }`}
            style={{
                backgroundColor: isScrolled ? 'color-mix(in srgb, var(--color-surface) 80%, transparent)' : 'transparent',
            }}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => {
                        window.scrollTo(0, 0)
                    }}
                >
                    {/* <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        Hamozoni
                    </p> */}
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-8">
                    {links.map((link) => (
                        <li
                            key={link.name}
                            className="text-white/70 hover:text-white text-[16px] font-medium cursor-pointer transition-colors"
                        >
                            <Link to={link.to} smooth={true} duration={500}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden sm:flex items-center gap-3">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                    <a
                        href="#contact"
                        className="inline-flex bg-white/10 hover:bg-white/20 text-white text-[15px] font-medium px-4 py-2 rounded-full border border-white/10 transition-all duration-200"
                    >
                        {copy.nav.cta}
                    </a>
                </div>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>

                    <div
                        className={`${!isOpen ? 'hidden' : 'flex'
                            } p-6 black-gradient absolute top-20 right-4 mx-4 my-2 min-w-[220px] z-10 rounded-2xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4 w-full">
                            {links.map((link) => (
                                <li
                                    key={link.name}
                                    className="font-medium cursor-pointer text-[16px] text-white/80"
                                    onClick={() => {
                                        setIsOpen(!isOpen)
                                    }}
                                >
                                    <Link to={link.to} smooth={true} duration={500}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="w-full">
                                <a
                                    href="#contact"
                                    className="inline-flex w-full justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition mb-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {copy.nav.cta}
                                </a>
                            </li>
                            <li className="w-full flex flex-col gap-3">
                                <LanguageSwitcher />
                                <ThemeSwitcher />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
