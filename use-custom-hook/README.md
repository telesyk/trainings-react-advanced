## 🧠 Exercises

### 1. `useOnlineStatus` Hook

> Create a custom hook that returns whether the user is online (true or false) using navigator.onLine and online/offline events.

**Expected Result:**

- The hook returns a Boolean value (`true` or `false`).
- It reflects the user's current **network status**:
  - `true` if the browser is online,
  - `false` if the browser is offline.
- When the user switches from online to offline or vice versa, the value updates automatically in the consuming component.
- Useful for conditionally rendering UI or warnings when offline.

---

### 2. `usePrevious` Hook

> Write a hook that tracks the previous value of a variable.

```js
const previousValue = usePrevious(currentValue)
```

**Expected Result:**

- The hook tracks the **previous value** of a given variable.
- It returns `undefined` on the first render, and on every subsequent render, it provides the previous value of the input.
- Example:
  - First render with value = 5 → returns `undefined`
  - Second render with value = 6 → returns `5`
  - Third render with value = 10 → returns `6`
- This helps in comparing prop/state changes between renders.

---

### 3. `useLocalStorage` Hook

> Build a hook that stores and retrieves a value from localStorage.

```js
const [name, setName] = useLocalStorage('name', 'Guest')
```

**Expected Result:**

- Returns a stateful value and a setter function just like `useState`.
- On initial load:
  - If a value already exists in `localStorage` under the given key, it is used.
  - Otherwise, the default value is stored and returned.
- Any updates via the setter also update the corresponding value in `localStorage`.
- The value persists across page reloads.
- Example:

  ```js
  const [name, setName] = useLocalStorage('name', 'Guest')
  ```

  - If `"name"` exists in localStorage → returns that
  - If not → stores and returns `"Guest"`

---
