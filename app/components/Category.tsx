import React from 'react'
import { View, Text } from 'react-native'
import Event from './Event'


const Category = ({ categoryData, events }:  { categoryData: any, events: any }) => {
  return (
    <View>
        <Text>{categoryData.name}</Text>
        {
            events.map((item: any) => {
                return (<Event eventData={item}/>)
            })
        }
    </View>
  )
}

export default Category