## 🧠 Exercises

### 🔸 Exercise 1: Lazy Load a Modal Component

> Create a SettingsModal component and lazy load it using React.lazy() when the user clicks a "Settings" button.

📌 **Goal**: Display a settings modal **only when the user clicks a button**, using `React.lazy`.

### 🪜 Step-by-Step:

1. **Create a modal component** (e.g., `SettingsModal.jsx`) and **export it as default**.
2. In your main component (e.g., `App.js`), use `React.lazy()` to import `SettingsModal`.
3. Use `useState` to manage a Boolean value like `isModalOpen`.
4. Add a button (e.g., "Open Settings") that toggles this state.
5. Wrap the lazy-loaded modal component in `React.Suspense` with a fallback (e.g., a spinner or “Loading…”).
6. Conditionally render the modal only when `isModalOpen === true`.

---

### 🔸 Exercise 2: Lazy Load Pages in a Router

> Use React Router v6+ and lazy load the Home, About, and Contact components. Wrap them in Suspense with a fallback.

📌 **Goal**: Set up a React Router app with three pages (Home, About, Contact), each **lazy-loaded on route change**.

### 🪜 Step-by-Step:

1. Install and configure **React Router v6+**.
2. Create three separate page components (`Home.jsx`, `About.jsx`, `Contact.jsx`) with default exports.
3. In your main `App.js`, import them using `React.lazy()`.
4. Use `<BrowserRouter>` and `<Routes>` to define your routes.
5. Wrap all routes with `<React.Suspense fallback={<...>}>`.
6. Test routing by clicking on navigation links and confirming fallback loading states appear during dynamic imports.

---

### 🔸 Exercise 3: Lazy Load a Third-Party Chart Library

> Integrate a charting library (like Chart.js or Recharts) and lazy load the component that uses it. Show "Loading chart..." while the chart loads.

📌 **Goal**: Render a chart (e.g., using Recharts or Chart.js), and **load the charting logic only when needed**.

### 🪜 Step-by-Step:

1. Install the charting library of your choice (e.g., Recharts).
2. Create a new component (e.g., `ChartPanel.jsx`) where you import and render a chart using sample data.
3. Export `ChartPanel` as default.
4. In the main view, define a `showChart` state.
5. Use `React.lazy()` to load the `ChartPanel` dynamically.
6. Wrap it with `React.Suspense` using a fallback UI.
7. Add a button to trigger `showChart`, and conditionally render the chart only when true.
