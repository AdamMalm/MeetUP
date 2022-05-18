import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

const Event = ({ title, description, location, eventImage, noGoing, imageGoing1, imageGoing2, imageGoing3 }: 
               { title: string; description: string;  location: string; eventImage: string; noGoing: number; 
                 imageGoing1: string; imageGoing2: string; imageGoing3: string}) => {
  
  return (
    <View style={styles.container}>
        {// <Image source={require(eventImage)}/>
        }
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{location}</Text>
        <Text>+{noGoing} Going</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      maxWidth: "40%",
      display: 'flex',
      justifyContent: 'center',
      
    },
  });

export default Event