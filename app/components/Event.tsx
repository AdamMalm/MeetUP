import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Event = () => {
  return (
    <View style={styles.container}>
        <Text>Event</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
    },
  });

export default Event