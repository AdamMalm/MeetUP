import React from "react";
import { ScrollView, Text, StyleSheet, View, Dimensions } from "react-native";
import Background from "../components/Background";
import HeaderButton from "../components/HeaderButton";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Chatpage = () => {
	return (
		<ScrollView>
			<HeaderButton />
			<View style={styles.container}>
				<Background />
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
});

export default Chatpage;
