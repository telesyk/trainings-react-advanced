import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import Button from './Button'
import { constraints } from '../constants'

export default function Login() {
  const { isAuthenticated, toggleAuthentication } = useContext(AuthContext)
  const authentication = isAuthenticated ? 'login' : 'logout'
  const { button, authText, imgSrc } = constraints[authentication]

  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure className="w-[200px] h-[280px] object-cover">
        <img src={imgSrc} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{authText}</h2>
        <div className="card-actions justify-end">
          <Button handleClick={() => toggleAuthentication()}>{button}</Button>
        </div>
      </div>
    </div>
  )
}
