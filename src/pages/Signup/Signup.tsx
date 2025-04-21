import React, { useState } from 'react'
import './Signup.scss'
import CustomButton from '../../components/Button/CustomButton'
import { GENDER_OPTIONS } from '../../utils/consts'
import CustomInput from '../../components/InputField/CustomInput'

type SignupFormData = {
  first_name: string
  last_name: string
  phone_number: number
  birthday: Date
  gender: string
  email: string
  password: string
}

const Signup = () => {
  const [formData, setFormData] = useState<SignupFormData>({} as SignupFormData)

  const handleSignupButton = async () => {
    await fetch(`http://localhost:8302/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formData }),
    })
  }

  const handleInput = (key: string, value: string) => {
    if (key) {
      setFormData((prevState) => ({ ...prevState, [key]: value }))
    }
  }
  const handleSelect = (key: string, value?: string) => {
    if (key && value) {
      setFormData((prevState) => ({ ...prevState, [key]: value }))
    }
  }
  return (
    <div className="login-container">
      <CustomInput
        handleInput={(e) => handleInput('first_name', e.target.value)}
        label="First name"
        type="text"
      />
      <CustomInput
        handleInput={(e) => handleInput('last_name', e.target.value)}
        label="Last name"
        type="text"
      />
      <CustomInput
        handleInput={(e) => handleInput('phone_number', e.target.value)}
        label="Phone number"
        type="tel"
      />
      <CustomInput
        handleInput={(e) => handleInput('birthday', e.target.value)}
        label="Birthday"
        type="date"
      />
      <CustomInput
        type="select"
        options={GENDER_OPTIONS}
        handleSelect={(value) => handleSelect('gender', value?.value)}
        label="Gender"
      />
      <CustomInput
        handleInput={(e) => handleInput('email', e.target.value)}
        label="Email"
        type="email"
      />
      <CustomInput
        handleInput={(e) => handleInput('password', e.target.value)}
        label="Password"
        type="password"
      />
      <CustomButton title="Sign Up" onClick={handleSignupButton} />
    </div>
  )
}

export default Signup
