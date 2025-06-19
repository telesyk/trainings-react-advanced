import { useContext } from 'react'
import LanguageContext from './LanguageContext'
import { translations } from './constants'

export default function Toolbar() {
  const { lang, setLang } = useContext(LanguageContext)
  const handleClick = () =>
    setLang(
      lang === translations.en.local
        ? translations.de.local
        : translations.en.local
    )
  const mainText =
    lang === translations.en.local
      ? translations.de.instruction
      : translations.en.instruction
  const langText =
    lang === translations.en.local
      ? translations.de.local
      : translations.en.local

  return (
    <button className="btn btn-info" onClick={handleClick}>
      <span>{mainText}</span> <span>{langText}</span>
    </button>
  )
}
