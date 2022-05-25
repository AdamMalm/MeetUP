import React from 'react'
import { ScrollView, Text, StyleSheet, View, Dimensions } from 'react-native'
import Event from '../components/Event'
import Background from "../components/Background"
import Category from "../components/Category"
import { useSession } from '../config/Eventprovider'
 
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const Eventpage = () => {
  const { eventList, addEvent } = useSession()

  const addEvents = (categoryId: number) => {
    const events = eventList.events.filter((item: any) => (item.categoryId === categoryId))
    return events
}

  return (

      <View style={styles.container}>
				<Background/>
        <ScrollView>
          {
              eventList.categories.map((item: any) => {
                  return (<Category categoryData={item} events={addEvents(item.categoryId)}/>)
              })
          }
        </ScrollView>
			</View>

  )
}

const styles = StyleSheet.create({
  container: {
	  flex: 1,
	  height: height,
	  width: width,
	},
});

export default Eventpage