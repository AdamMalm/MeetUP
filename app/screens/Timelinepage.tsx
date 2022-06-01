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
import Event from "../components/Event"

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

// NEDAN ÄR EXEMPEL PÅ HUR MAN ANVÄNDER CONTEXT, ÄR BARA ATT TA BORT IFALL DU SKA BYGGA UPP SIDAN

const Timelinepage = () => {
	const { personalEventList } = useSession();

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<HeaderButton />
			<SearchButton />
			<View style={{marginBottom: height*0.1}}>
				<Background />
				<Text>Timeline Page</Text>
				<View>
					{personalEventList.map((item: any) => {
						return <Event eventData={item} />;
					})}
				</View>
				<Button
					onPress={() => console.log(personalEventList)}
					title="check events"
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		
	},
});

export default Timelinepage;
