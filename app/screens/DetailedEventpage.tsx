import React from 'react'
import {View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../config/types"
import Ionicons from "react-native-vector-icons/Ionicons"
import { LinearGradient } from 'expo-linear-gradient'
import { useSession } from "../config/Eventprovider";

type Props = NativeStackScreenProps<RootStackParamList, 'DetailedEventpage'>;

const windowWidth = Dimensions.get("window").width;
const buttonWidth = 0.175 * windowWidth;
const imageWidth = Dimensions.get("window").width;
const imageHeight = 0.35 * Dimensions.get("window").height;
const headerHeight =  0.25 * imageHeight;

const DetailedEventpage = ({ route, navigation }: Props) => {
  const { personalEventList, registerEvent } = useSession();

  return (
    <View>
      	<Image
					source={{ uri: route.params.eventImage }}
					style={styles.image}
				/>
        <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={styles.header}>
          <TouchableOpacity style={styles.backButton}
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Ionicons
                name="arrow-back-outline"
                size={58}
                color="black"
            />
          </TouchableOpacity>
        </LinearGradient>
        <Text>{route.params.title}</Text>
        <Text>{route.params.description}</Text>
        <Text>{route.params.location}</Text>
        <TouchableOpacity style={styles.registerButton} onPress={() => {registerEvent(route.params)}}>
          <Text style={styles.buttonText}>Join Event</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    width: windowWidth,
    height: headerHeight,
  },
	image: {
		width: imageWidth,
		height: imageHeight,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
  backButton: {
    position: 'absolute',
    backgroundColor: "white",
    margin: 30,
    padding: 6,
    paddingRight: 10,
    paddingLeft: 14,
    borderRadius: 22,
  },
  registerButton: {
    justifyContent: 'center',
    backgroundColor: "#4F1271",
    maxWidth: buttonWidth,
    borderRadius: 8,
  },
  buttonText: {
    padding: 20,
    color: "white", 
    textAlign: 'center', 
    fontSize: 24
  }
});

export default DetailedEventpage