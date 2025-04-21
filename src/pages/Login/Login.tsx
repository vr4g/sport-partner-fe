import InputField from '../../components/InputField/CustomInput'
import React from 'react'
import './Login.scss'
import CustomButton from '../../components/Button/CustomButton'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="login-container">
      <InputField handleInput={() => {}} label="Email" type="text" />
      <InputField handleInput={() => {}} label="Password" type="password" />
      <CustomButton title="Login" onClick={() => {}} />
      <CustomButton
        variant="outlined"
        title="Sign Up"
        onClick={() => navigate('/signup', { replace: true })}
      />
    </div>
  )
}

export default Login
