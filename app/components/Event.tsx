import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { inlineStyles } from 'react-native-svg';
 
const eventWidth = 0.45*Dimensions.get('window').width;
const eventHeight = 0.25*Dimensions.get('window').height;
const imageWidth = 0.45*Dimensions.get('window').width;
const imagetHeight = 0.5*eventHeight;
 
 
const Event = ({ title, description, location, eventImage, noGoing, imageGoing1, imageGoing2, imageGoing3 }:
               { title: string; description: string;  location: string; eventImage: string; noGoing: number;
                 imageGoing1: string; imageGoing2: string; imageGoing3: string}) => {
 
  return (
    <View style={styles.container}>
        <>
          <Image source={require("../assets/Duckfeeding.jpg")} style={styles.image}/>
        </>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <FontAwesomeIcon icon={ faLocationDot } size={ 22 } style={ styles.icon }/>
          <Text style={styles.location}>{location}</Text>
          <View style={styles.goingContainer}>
            <Image source={require("../assets/going1.jpg")} style={styles.goingImg}/>
            <Image source={require("../assets/going2.jpg")} style={styles.goingImg}/>
            <Image source={require("../assets/going3.jpg")} style={styles.goingImg}/>
            <Text style={styles.goingText}>+{noGoing} Going</Text>
          </View>
        </View>
    </View>
  )
}
 
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      width: eventWidth,
      height: eventHeight,
      display: 'flex',
      margin: 20,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2.2,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.3,
 
      elevation: 24,
 
    },
    contentContainer: {
      backgroundColor: '#fff',
      padding: 10,
      display: "flex",
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
 
    image: {
      width: imageWidth,
      height: imagetHeight,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
 
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 20,
      color: '#747688'
    },
    icon: {
      margin: 10
    },
    location: {
      fontSize: 20,
      marginTop: 5
    },
    goingContainer: {
      marginLeft: 30,
      display: "flex",
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    goingText: {
      marginLeft: 10,
      fontSize: 20,
      marginTop: 5,
      color: '#000'
    },
    goingImg: {
      marginTop: 5,
      marginLeft: -5,
      height: 30,
      width: 30,
      borderRadius: 100,
    }
});
 
export default Event