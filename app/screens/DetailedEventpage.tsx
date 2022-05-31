import React from 'react'
import {View, Text} from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../config/types"

type Props = NativeStackScreenProps<RootStackParamList, 'DetailedEventpage'>;

const DetailedEventpage = ({ route}: Props) => {

  return (
    <View>
        <Text>{route.params.title}</Text>
        <Text>{route.params.description}</Text>
        <Text>{route.params.location}</Text>
    </View>
  )
}

export default DetailedEventpage