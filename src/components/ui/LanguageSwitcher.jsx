import { Languages } from 'lucide-react'
import { useTranslation } from '../../context/TranslationContext'

const LanguageSwitcher = () => {
    const { language, setLanguage, languages } = useTranslation()

    return (
        <label className="preference-control" aria-label="Language selector">
            <Languages size={16} className="text-white/70" />
            <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="preference-select"
            >
                {languages.map(({ id, label }) => (
                    <option key={id} value={id}>
                        {label}
                    </option>
                ))}
            </select>
        </label>
    )
}

export default LanguageSwitcher

