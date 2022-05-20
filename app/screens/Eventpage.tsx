import React from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'
import Event from '../components/Event'
import eventdata from '../../jsonconverter'
 
const Eventpage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.categoryContainer}>
        <Event 
          title="Example Title" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            location="Ducklake"
            eventImage="../assets/Duckfeeding.avif"
            noGoing={10}
            imageGoing1="../assets/going1.jpg"
            imageGoing2="../assets/going2.jpg"
            imageGoing3="../assets/going3.jpg"
        />
        <Event 
          title="Example Title" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            location="Ducklake"
            eventImage="../assets/Duckfeeding.avif"
            noGoing={10}
            imageGoing1="../assets/going1.jpg"
            imageGoing2="../assets/going2.jpg"
            imageGoing3="../assets/going3.jpg"
        />
        <Event 
          title="Example Title" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            location="Ducklake"
            eventImage="../assets/Duckfeeding.avif"
            noGoing={10}
            imageGoing1="../assets/going1.jpg"
            imageGoing2="../assets/going2.jpg"
            imageGoing3="../assets/going3.jpg"
        />
      </View>

      <View style={styles.categoryContainer}>
        <Event 
          title="Example Title" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            location="Ducklake"
            eventImage="../assets/Duckfeeding.avif"
            noGoing={10}
            imageGoing1="../assets/going1.jpg"
            imageGoing2="../assets/going2.jpg"
            imageGoing3="../assets/going3.jpg"
        />
        <Event 
          title="Example Title" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            location="Ducklake"
            eventImage="../assets/Duckfeeding.avif"
            noGoing={10}
            imageGoing1="../assets/going1.jpg"
            imageGoing2="../assets/going2.jpg"
            imageGoing3="../assets/going3.jpg"
        />
        <Event 
          title="Example Title" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            location="Ducklake"
            eventImage="../assets/Duckfeeding.avif"
            noGoing={10}
            imageGoing1="../assets/going1.jpg"
            imageGoing2="../assets/going2.jpg"
            imageGoing3="../assets/going3.jpg"
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    

  },

  categoryContainer: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  }
});

export default Eventpage