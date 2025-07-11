import { useState } from 'react'
import LanguageContext from './LanguageContext'
import { translations } from './constants'
import Toolbar from './Toolbar'

function App() {
  const [lang, setLang] = useState('ENG')

  return (
    <div className="max-w-md mx-auto grid place-content-center gap-4 flex-1">
      <LanguageContext.Provider value={{ lang, setLang }}>
        <Toolbar />
        {lang === translations.en.local ? (
          <p>{translations.en.greeting}</p>
        ) : (
          <p>{translations.de.greeting}</p>
        )}
      </LanguageContext.Provider>
    </div>
  )
}

export default App
