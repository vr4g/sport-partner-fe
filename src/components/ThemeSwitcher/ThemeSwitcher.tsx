import { useState } from 'react'
import SwitchToggle from '../SwitchToggler/SwitchToggle'
import './ThemeSwitcher.scss'
import { useTheme } from '../../ThemeContext'
import { ReactComponent as LightModeIcon } from '../../assets/LightModeIcon.svg'
import { ReactComponent as DarkModeIcon } from '../../assets/DarkModeIcon.svg'

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme()
  const [activeState, setActiveState] = useState(true)

  const changeState = () => {
    setActiveState((prevState) => !prevState)
    toggleTheme(activeState ? 'light' : 'dark')
  }

  return (
    <div className="theme-switcher-container">
      <DarkModeIcon />{' '}
      <SwitchToggle changeState={changeState} activeState={activeState}></SwitchToggle>{' '}
      <LightModeIcon />
    </div>
  )
}

export default ThemeSwitcher
