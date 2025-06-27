import SearchField, { SEARCH_NAME } from './components/SearchField'
import carsList from './cars.json'
import { getUniqueList } from './utils'
import { useState } from 'react'
import CarItem from './components/CarItem'

export default function Task3() {
  const [isExist, setIsExist] = useState(false)
  const [query, setQuery] = useState('')

  const uniqueCarNames = getUniqueList(carsList)
  // uniqueCarNames.forEach(car => console.debug(car))

  const actionSubmit = formData => {
    const newQuery = formData.get(SEARCH_NAME)
    // console.debug(newQuery)
    setQuery(newQuery)
    setIsExist(uniqueCarNames.has(newQuery))
  }

  return (
    <>
      <h1 className="text-2xl">🟣 Exercise 3: useMemo for Filtering</h1>
      <div className="py-6 space-y-6">
        <SearchField action={actionSubmit} />
        <SearchList items={carsList} query={query} isExist={isExist} />
      </div>
    </>
  )
}

function SearchList({ items, query, isExist }) {
  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )
  console.debug(filtered)

  return (
    <>
      {isExist && (
        <div className="join join-vertical w-full">
          {filtered.map(car => (
            <CarItem key={car.id} car={car} />
          ))}
        </div>
      )}
      {!isExist && query !== '' && (
        <div className="text-xl text-center">
          No <span className="font-mono text-fuchsia-200">{query}</span> car in
          a list
        </div>
      )}
      {!isExist && (!query || query === '') && (
        <div className="join join-vertical w-full">
          {items.map(car => (
            <CarItem key={car.id} car={car} />
          ))}
        </div>
      )}
    </>
  )
}
