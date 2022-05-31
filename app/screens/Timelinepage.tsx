import React, { useContext } from "react";
import {
	ScrollView,
	Text,
	View,
	Button,
	Dimensions,
	StyleSheet,
} from "react-native";
import { useSession } from "../config/Eventprovider";
import Background from "../components/Background";
import HeaderButton from "../components/HeaderButton";
import SearchButton from "../components/SearchButton";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

// NEDAN ÄR EXEMPEL PÅ HUR MAN ANVÄNDER CONTEXT, ÄR BARA ATT TA BORT IFALL DU SKA BYGGA UPP SIDAN

const Timelinepage = () => {
	const { eventList, addEvent } = useSession();

	return (
		<ScrollView>
			<HeaderButton />
			<SearchButton />
			<View style={styles.container}>
				<Background />
				<Text>Timeline Page</Text>
				<View>
					{eventList.events.map((item: any) => {
						
					})}
				</View>
				<Button
					onPress={() => console.log(eventList)}
					title="check events"
				/>
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

export default Timelinepage;
