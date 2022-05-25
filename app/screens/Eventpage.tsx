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
        <ScrollView style={styles.categoryContainer} horizontal={true}>
            <Text style={[styles.categoryTag, styles.firstChild]}>All</Text>
            <Text style={styles.categoryTag}>Local</Text>
            <Text style={styles.categoryTag}>This week</Text>
            <Text style={styles.categoryTag}>Classes</Text>
            <Text style={styles.categoryTag}>Online</Text>
            <Text style={styles.categoryTag}>Art</Text>
            <Text style={styles.categoryTag}>Games</Text>
            <Text style={styles.categoryTag}>Ducks</Text>
        </ScrollView>
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

  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'scroll',
  },
  categoryTag: {
    fontSize: 24,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
    height: 55

  },
  firstChild: {
    textDecorationLine: 'underline',
    textDecorationColor: '4F1271',
    textDecorationStyle: 'solid'
  },
  eventContainer: {
    
  }
});

export default Eventpage;
