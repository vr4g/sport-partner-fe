import React, { ChangeEventHandler } from 'react'
import Select, { ActionMeta, SingleValue } from 'react-select'
import './CustomInput.scss'

type Props = {
  label: string
  type: string
  handleInput?: ChangeEventHandler<HTMLInputElement>
  options?: { label: string; value: string }[]
  handleSelect?: (
    newValue: SingleValue<{ label: string; value: string }>,
    actionMeta: ActionMeta<{ label: string; value: string }>,
  ) => void
}

const CustomInput = ({ label, type, handleInput, handleSelect, options }: Props) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      {type === 'select' ? (
        <Select
          className="select-style"
          classNamePrefix="select"
          // defaultValue={colourOptions[0]}
          // isDisabled={isDisabled}
          // isLoading={isLoading}
          onChange={handleSelect}
          isClearable={true}
          name="color"
          options={options}
          menuPosition="fixed"
          menuPlacement="auto"
          styles={{
            valueContainer: (base: any) => ({
              ...base,
              height: `35px`,
              padding: '0 8px',
            }),
          }}
        />
      ) : (
        <input onChange={handleInput} type={type} />
      )}
    </div>
  )
}

export default CustomInput
