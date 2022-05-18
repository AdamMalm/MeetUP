import React from 'react'
import { ScrollView, Text } from 'react-native'
import Event from '../components/Event'
import eventdata from '../../jsonconverter'
 
const Eventpage = () => {
  console.log(eventdata)
  return (
    <ScrollView>
        <Text>Event Page</Text>
        <Event />
    </ScrollView>
  )
}

export default Eventpage