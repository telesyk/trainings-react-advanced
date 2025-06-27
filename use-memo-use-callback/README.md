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

### 🎯 **Expected Result for Exercise 3: `useMemo` for Filtering**

The component should:

1. **Receive a list of items and a query string** as props.
2. **Filter the list of items** based on whether each item’s `name` includes the `query` string (case-insensitive).
3. **Optimize the filtering process** using `useMemo`, so that the filtering only re-runs when either:

   - the list of `items` changes, or
   - the `query` string changes.

4. **Render the filtered items** inside a `<ul>` as individual `<li>` elements, each using a unique key (`item.id`).

---

### ✅ Functional Expectations

- Filtering logic **should not recompute** unnecessarily when props don’t change.
- The UI must **accurately reflect** the current query by listing only matching names.
- Performance improves on large lists by preventing redundant filtering during unrelated re-renders.
