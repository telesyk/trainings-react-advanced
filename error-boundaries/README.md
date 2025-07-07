## 🧪 Exercises

### 🔸 Exercise 1 (Beginner)

**Goal**: Create an `ErrorBoundary` and wrap a component that throws an error when a button is clicked.

**Steps**:

1. Create a component that throws an error during render (e.g., if a counter exceeds 3).
2. Wrap it inside `ErrorBoundary`.
3. Add UI to recover or reload.

---

### 🔸 Exercise 2 (Advanced)

**Goal**: Wrap multiple dynamic components (e.g., charts or cards) with **individual error boundaries** and log errors to the console or a mock logger.

**Steps**:

1. Create 2–3 components where one of them randomly throws an error during render.
2. Wrap each in a separate `ErrorBoundary`.
3. Implement custom `componentDidCatch` to log errors into a mock array or local storage.
