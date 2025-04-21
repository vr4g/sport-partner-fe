import React from 'react'
import './ActivityCard.scss'
import CustomButton from '../Button/CustomButton'
import { sportIconMap } from '../../utils/consts'

type ActivityCardProps = {
  sport: string
  date: string
  time: string
  location: string
  description: string
  spotsLeft: number
  onJoin: () => void
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  sport,
  date,
  time,
  location,
  description,
  spotsLeft,
  onJoin,
}) => {
  const Icon = sportIconMap(sport)
  return (
    <div className="activity-card">
      <div className="activity-header">
        {/* <img  alt={`${sport} icon`} className="sport-icon" /> */}
        {<Icon height={60} width={60} />}
      </div>

      <div className="activity-details">
        <h3>{sport}</h3>
        <p>
          <span>{date}</span>
          <div className="divider"></div>
          <span>{time}</span>
        </p>
        <p>{location}</p>
        {/* <p className="description">{description}</p> */}
        <p className="spots">
          {spotsLeft} spot{spotsLeft !== 1 && 's'} left
        </p>
      </div>
      <CustomButton title="Join" onClick={onJoin} />
    </div>
  )
}

export default ActivityCard
