import { useEffect, useState, useRef } from 'react'

export function useOnlineStatus() {
  const [isOnline, setOnline] = useState(window.navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setOnline(window.navigator.onLine)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOnline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOnline)
    }
  }, [window.navigator.onLine])

  return isOnline
}

export function usePrevious(newValue) {
  const ref = useRef()

  useEffect(() => {
    ref.current = newValue
  }, [newValue])

  return ref.current
}

export function useLocalStorage(key, initialValue) {
  if (!key) return

  const [currentValue, setValue] = useState()

  const setStorageValue = newValue => {
    setValue(newValue)
    localStorage.setItem(key, newValue)
  }

  useEffect(() => {
    if (!localStorage.getItem(key)) {
      setStorageValue(initialValue || '')
    } else {
      setValue(localStorage.getItem(key))
    }
  }, [])

  return [currentValue, setStorageValue]
}

/* // possible solution generated w LLM
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.warn('Error reading from localStorage', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Error writing to localStorage', error);
    }
  }, [key, value]);

  return [value, setValue];
}
 */
