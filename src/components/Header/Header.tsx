import React from 'react'
import CustomButton from '../Button/CustomButton'
import './Header.scss'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

const Header = () => {
  return (
    <div className={'headerContainer'}>
      <div className="padding">
        <h1>Find Sports Partners</h1>
        <p>DIscover people to play your favorite sports with.</p>
        <CustomButton title="Post an activity" onClick={() => {}} />
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Header
