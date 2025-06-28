import { useMemo, useState } from 'react'
import { getUniqueList } from './utils'
import carsList from './cars.json'
import SearchField, { SEARCH_NAME } from './components/SearchField'
import SearchList from './components/SearchList'
import EmptyList from './components/EmptyList'

export default function Task3() {
  const [query, setQuery] = useState('')

  const uniqueCarNames = useMemo(() => getUniqueList(carsList), [carsList])

  const filtered = useMemo(() => {
    return carsList.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [query])

  const isExist = useMemo(() => {
    return uniqueCarNames.has(query.trim().toLowerCase())
  }, [uniqueCarNames, query])

  const actionSubmit = formData => {
    const newQuery = formData.get(SEARCH_NAME) || ''
    setQuery(newQuery)
  }

  return (
    <>
      <h1 className="text-2xl">🟣 Exercise 3: useMemo for Filtering</h1>
      <div className="py-6 space-y-6">
        <SearchField action={actionSubmit} />
        <>
          {filtered.length > 0 && query && <SearchList list={filtered} />}
          {(!query || query === '') && <SearchList list={carsList} />}
          {filtered.length === 0 && query && <EmptyList text={query} />}
        </>
      </div>
    </>
  )
}
