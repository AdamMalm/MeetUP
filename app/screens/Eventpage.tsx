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
        <View style={styles.categoryContainer}>
            <Text style={[styles.categoryTag, styles.firstChild]}>All</Text>
            <Text style={styles.categoryTag}>Local</Text>
            <Text style={styles.categoryTag}>This week</Text>
            <Text style={styles.categoryTag}>Classes</Text>
            <Text style={styles.categoryTag}>Online</Text>
            <Text style={styles.categoryTag}>Art</Text>
            <Text style={styles.categoryTag}>Games</Text>
            <Text style={styles.categoryTag}>Ducks</Text>
        </View>
				<View style={styles.eventContainer}>
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
          
        <View style={styles.eventContainer}>
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 10,
    whiteSpace: 'nowrap'

  },
  firstChild: {
    textDecorationLine: 'underline',
    textDecorationColor: '4F1271',
    textDecorationStyle: 'solid'
  },
  eventContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    overflow: 'scroll'
  }
});

export default Eventpage;
