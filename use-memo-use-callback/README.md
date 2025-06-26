## 🟢 **Exercise 1: Memoize Expensive Calculation**

You have a component that calculates factorial. Prevent it from recalculating if the input hasn't changed.

```js
function Factorial({ number }) {
  // Add useMemo here
  const result = heavyFactorial(number)
  return <div>Result: {result}</div>
}
```

---

## 🔵 **Exercise 2: useCallback for Stable Event Handler**

Prevent the child component from re-rendering unless truly needed.

```js
function Parent() {
  const handleClick = () => {
    console.log('Clicked')
  }

  return <Child onClick={handleClick} />
}

// Memoize <Child />
```

---

## 🟣 **Exercise 3: useMemo for Filtering**

You have a list of items with a search input. Use `useMemo` to optimize the filtered result.

```js
function SearchList({ items, query }) {
  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <ul>
      {filtered.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
```
