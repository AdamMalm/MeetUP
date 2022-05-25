import React from "react";
import { ScrollView, Text, View, Dimensions, StyleSheet } from "react-native";
import Background from "../components/Background";
import HeaderButton from "../components/HeaderButton";
import SearchButton from "../components/SearchButton";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const CreateEventpage = () => {
	return (
		<ScrollView>
			<HeaderButton />
			<SearchButton />
			<View style={styles.container}>
				<Background />
				<Text>Create Event Page</Text>
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

export default CreateEventpage;
