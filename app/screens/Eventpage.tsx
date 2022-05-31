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

const Eventpage = () => {
	const { eventList, addEvent } = useSession();

	const addEvents = (categoryId: number) => {
		const events = eventList.events.filter(
			(item: any) => item.categoryId === categoryId
		);
		return events;
	};

	return (
		<ScrollView style={styles.container}>
			<Text
				style={{
					zIndex: 1,
					fontSize: 43,
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
			<ScrollView>
				<ScrollView style={styles.categoryContainer} horizontal={true}>
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
					{eventList.categories.map((item: any) => {
						return (
							<Category
								categoryData={item}
								events={addEvents(item.categoryId)}
							></Category>
						);
					})}
				</ScrollView>
			</ScrollView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: height,
		width: width,
		marginBottom: 100,
	},

	categoryContainer: {
		marginTop: 30,
		display: "flex",
		flexDirection: "row",
		overflow: "scroll",
	},
	categoryTag: {
		fontSize: 29,
		paddingTop: 13,
		paddingBottom: 13,
		paddingLeft: 28,
		paddingRight: 28,
		borderRadius: 20,
		backgroundColor: "white",
		margin: 20,
		height: 65,
	},
	firstChild: {
		textDecorationLine: "underline",
		textDecorationColor: "#4F1271",
		textDecorationStyle: "solid",
	},
	eventContainer: {},
});

export default Eventpage;
