import { PATHS } from './constants'
import { snakeCaseToSeparate } from './utils'
import { RouterContext } from './RouterContext'
import { useContext } from 'react'

export default function Navbar() {
  const { handleRout } = useContext(RouterContext)

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          daisyUI
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
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
  )
}
