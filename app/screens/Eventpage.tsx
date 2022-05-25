import React from "react";
import { ScrollView, Text, StyleSheet, View, Dimensions } from "react-native";
import Event from "../components/Event";
import eventdata from "../../jsonconverter";
import Background from "../components/Background";
import { faFirstAid } from '@fortawesome/free-solid-svg-icons';
 
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const Eventpage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
				<Background/>
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
				<ScrollView style={styles.eventContainer} horizontal={true}>
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
        </ScrollView>
          
        <ScrollView style={styles.eventContainer} horizontal={true}>
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
        </ScrollView>
			</View>
		</ScrollView>
	);
};

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
