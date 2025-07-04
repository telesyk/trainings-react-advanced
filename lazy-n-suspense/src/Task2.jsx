import { BrowserRouter, Routes, Route } from 'react-router'
import { lazy, Suspense } from 'react'
import Task2Nav from './components/Task2Nav'
import PageLoader from './components/PageLoader'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

export default function Task2() {
  return (
    <BrowserRouter>
      <Task2Nav />
      <Routes>
        <Route
          path="home"
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
