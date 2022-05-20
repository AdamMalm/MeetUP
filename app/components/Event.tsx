import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

const Event = ({ title, description, location, eventImage, noGoing, imageGoing1, imageGoing2, imageGoing3 }: 
               { title: string; description: string;  location: string; eventImage: string; noGoing: number; 
                 imageGoing1: string; imageGoing2: string; imageGoing3: string}) => {
  
  return (
    <View style={styles.container}>
        <Image source={require("../assets/favicon.png")} style={styles.image}/>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{location}</Text>
        <Text>+{noGoing} Going</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      minWidth: "50%",
      display: 'flex',
      justifyContent: 'center',
      margin: 20,
      marginRight: 0,
    },

    image: {
      minHeight: '50%'
    }
});

export default Event