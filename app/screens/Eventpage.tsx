import React from 'react'
import { ScrollView, Text } from 'react-native'
import Event from '../components/Event'
 
const Eventpage = () => {
  return (
    <ScrollView>
        <Event 
          title="Example Title" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          location="Ducklake"
          eventImage="../assets/Duckfeeding.jpg"
          noGoing={10}
          imageGoing1="../assets/going1.jpg"
          imageGoing2="../assets/going2.jpg"
          imageGoing3="../assets/going3.jpg"
        />
    
    </ScrollView>
  )
}

export default Eventpage