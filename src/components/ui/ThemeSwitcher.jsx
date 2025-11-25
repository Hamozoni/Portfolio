import { Palette } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const ThemeSwitcher = () => {
    const { theme, setTheme, themes } = useTheme()

    return (
        <label className="preference-control" aria-label="Theme selector">
            <Palette size={16} className="text-white/70" />
            <select
                value={theme}
                onChange={(event) => setTheme(event.target.value)}
                className="preference-select"
            >
                {themes.map(({ id, label, emoji }) => (
                    <option key={id} value={id}>
                        {emoji} {label}
                    </option>
                ))}
            </select>
        </label>
    )
}

export default ThemeSwitcher

