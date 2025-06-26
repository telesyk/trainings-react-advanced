import { PATHS } from '../constants'
import { snakeCaseToSeparate } from '../utils'
import { RouterContext } from '../RouterContext'
import { useContext } from 'react'
import Switcher from './Switcher'

export default function Navbar() {
  const { handleRout } = useContext(RouterContext)

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          daisyUI
        </a>
        <Switcher />
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-square btn-ghost m-1">
            <span hidden>Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            {PATHS.map(path => (
              <li key={path} className="capitalize">
                <a href={path} onClick={handleRout}>
                  {snakeCaseToSeparate(path)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
