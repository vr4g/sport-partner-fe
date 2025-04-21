import React from 'react'
import ActivityCard from '../../components/ActivityCard/ActivityCard'

const HomeScreen = () => {
  return (
    <div>
      <ActivityCard
        sport="Tennis"
        date="Saturday, April 12"
        time="15:00"
        location="Park Court XY"
        description="I have tennis balls and rackets. Court is €10/hour, we split it."
        spotsLeft={1}
        onJoin={() => console.log('Joined Tennis!')}
      />
      <ActivityCard
        sport="Football"
        date="Saturday, April 12"
        time="15:00"
        location="Park Court XY"
        description="I have ball. No payment required"
        spotsLeft={8}
        onJoin={() => console.log('Joined!')}
      />
    </div>
  )
}

export default HomeScreen
