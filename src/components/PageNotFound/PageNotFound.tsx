import './PageNotFound.scss'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className={'container'}>
      <div className={'errorCode'}>404</div>
      <div className={'errorInfo'}>Stranica nije pronađena!</div>
      <Link className={'backButton'} to="/">
        Natrag na početnu
      </Link>
    </div>
  )
}

export default PageNotFound
