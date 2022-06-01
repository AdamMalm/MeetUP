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
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			<HeaderButton />
			<SearchButton />
			<View style={{marginBottom: height*0.1, minHeight: 0.5 * height}}>
				<Background />
				<View>
					{personalEventList.map((item: any, i: number) => {
						return <Event eventData={item} key={i}/>;
					})}
				</View>
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
