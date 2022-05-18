import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Card } from 'react-native-elements'

const Event = () => {
  return (
    <Card containerStyle={styles.container}>
        <Text>Event</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
    },
  });

export default Event