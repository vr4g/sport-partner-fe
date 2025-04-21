import React, { MouseEventHandler } from 'react'
import './SwitchToggle.scss'

interface Props {
    activeState: boolean
    changeState: MouseEventHandler<HTMLDivElement>
}

const SwitchToggle: React.FC<Props> = ({ activeState, changeState }) => {
    return (
        <div onClick={changeState} className={`${activeState ? 'switch switch-active' : 'switch'}`}>
            <span className={`${activeState ? 'switch-dot switch-dot-active' : 'switch-dot'}`}></span>
        </div>
    )
}

export default SwitchToggle
