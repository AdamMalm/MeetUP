import React from "react";
import { ScrollView, Text, StyleSheet, View, Dimensions } from "react-native";
import Event from "../components/Event";
import Background from "../components/Background";
import Category from "../components/Category";
import { useSession } from "../config/Eventprovider";
import HeaderButton from "../components/HeaderButton";
import SearchButton from "../components/SearchButton";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const fontWidth = Dimensions.get("window").width;

const Eventpage = () => {
	const { eventList, addEvent } = useSession();

	const addEvents = (categoryId: number) => {
		const events = eventList.events.filter(
			(item: any) => item.categoryId === categoryId
		);
		return events;
	};

	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<Text
				style={{
					zIndex: 1,
					fontSize: fontWidth*0.04,
					color: "white",
					marginTop: 34,
					marginLeft: 134,
				}}
			>
				{" "}
				Discover Events
			</Text>
			<Background />
			<HeaderButton />
			<SearchButton />
			<View style={{marginBottom: height*0.075}}>
				<ScrollView style={styles.categoryContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
					<Text style={[styles.categoryTag, styles.firstChild]}>
						All
					</Text>
					<Text style={styles.categoryTag}>Local</Text>
					<Text style={styles.categoryTag}>This week</Text>
					<Text style={styles.categoryTag}>Classes</Text>
					<Text style={styles.categoryTag}>Online</Text>
					<Text style={styles.categoryTag}>Art</Text>
					<Text style={styles.categoryTag}>Games</Text>
					<Text style={styles.categoryTag}>Ducks</Text>
				</ScrollView>
				<ScrollView>
					{eventList.categories.map((item: any, i: number) => {
						return (
							<Category
								categoryData={item}
								events={addEvents(item.categoryId)}
								key={i}
							></Category>
						);
					})}
				</ScrollView>
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
	categoryContainer: {
		marginTop: 30,
		marginBottom: 30,
		display: "flex",
		flexDirection: "row",
		overflow: "scroll",
	},
	categoryTag: {
		fontSize: fontWidth*0.026,
		paddingTop: 13,
		paddingBottom: 13,
		paddingLeft: 28,
		paddingRight: 28,
		borderRadius: 20,
		backgroundColor: "white",
		margin: 20,
	},
	firstChild: {
		textDecorationLine: "underline",
		textDecorationColor: "#4F1271",
		textDecorationStyle: "solid",
	},
	eventContainer: {},
});

export default Eventpage;
