import { ReactComponent as Tennis } from '../assets/Icons/tennis.svg'
import { ReactComponent as Football } from '../assets/Icons/football.svg'
import { ReactComponent as TableTennis } from '../assets/Icons/table-tennis.svg'
import { ReactComponent as Squash } from '../assets/Icons/squash.svg'
import { ReactComponent as Badminton } from '../assets/Icons/badminton.svg'
import { ReactComponent as Basketball } from '../assets/Icons/basketball.svg'

export const sportIconMap = (sport: string) => {
  switch (sport.toLowerCase()) {
    case 'tennis':
      return Tennis
    case 'football':
      return Football
    case 'table tennis':
      return TableTennis
    case 'basketball':
      return Basketball
    case 'badminton':
      return Badminton
    case 'squash':
      return Squash
    default:
      return Squash
  }
}

export const defaultLanguages = [
  { target: { value: 'en', name: 'English' } },
  { target: { value: 'hr', name: 'Croatian' } },
]

export const emailReggex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

export const LOCALSTORAGE_TOKEN_KEY = 'sa-token'
