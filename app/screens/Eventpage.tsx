import React from 'react'
import { ScrollView, Text } from 'react-native'
import Event from '../components/Event'
 
const Eventpage = () => {
  return (
    <ScrollView>
        <Text>Event Page</Text>
        <Event />
    </ScrollView>
  )
}

export default Eventpage