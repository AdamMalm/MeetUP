import React, { useContext } from 'react'
import { ScrollView, Text, View, Button } from 'react-native'
import { useSession } from '../config/Eventprovider'
import Background from "../components/Background";

  // NEDAN ÄR EXEMPEL PÅ HUR MAN ANVÄNDER CONTEXT, ÄR BARA ATT TA BORT IFALL DU SKA BYGGA UPP SIDAN

const Timelinepage = () => { 
  const { eventList, addEvent } = useSession()

  return (
    <ScrollView>
        <Text>Timeline Page</Text>
        <View>
          {
          eventList.events.map((item: any) => {
            console.log(item.title)
          })
          }

        </View>
        <Button onPress={() => console.log(eventList)} title="check events"/>
    </ScrollView>
  )
}

export default Timelinepage