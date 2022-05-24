import React from 'react'
import { Image, StyleSheet } from "react-native";

const Background = () => {
  return (
    <>
    	<Image
		source={require("../assets/intersect.png")}
		style={styles.image}
		/>
    </>
  )
}

const styles = StyleSheet.create({
	image: {
	  position: "absolute",
	  top: 0,
	},
});

export default Background