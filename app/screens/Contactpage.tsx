import React from "react";
import { ScrollView, Text, Dimensions, View, StyleSheet } from "react-native";
import Background from "../components/Background";
import HeaderButton from "../components/HeaderButton";
import SearchButton from "../components/SearchButton";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Contactpage = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<HeaderButton />
			<SearchButton />
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

export default Contactpage;
