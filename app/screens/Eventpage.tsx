import React from "react";
import { ScrollView, Text, StyleSheet, View, Dimensions } from "react-native";
import Event from "../components/Event";
import eventdata from "../../jsonconverter";
import Background from "../components/Background";
import HeaderButton from "../components/HeaderButton";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Eventpage = () => {
	return (
		<ScrollView>
			<HeaderButton />
			<View style={styles.container}>
				<Background />
				<View style={styles.categoryContainer}>
					<Event
						title="Example Title"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
						location="Ducklake"
						eventImage="../assets/Duckfeeding.avif"
						noGoing={10}
						imageGoing1="../assets/going1.jpg"
						imageGoing2="../assets/going2.jpg"
						imageGoing3="../assets/going3.jpg"
					/>
					<Event
						title="Example Title"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
						location="Ducklake"
						eventImage="../assets/Duckfeeding.avif"
						noGoing={10}
						imageGoing1="../assets/going1.jpg"
						imageGoing2="../assets/going2.jpg"
						imageGoing3="../assets/going3.jpg"
					/>
					<Event
						title="Example Title"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
						location="Ducklake"
						eventImage="../assets/Duckfeeding.avif"
						noGoing={10}
						imageGoing1="../assets/going1.jpg"
						imageGoing2="../assets/going2.jpg"
						imageGoing3="../assets/going3.jpg"
					/>
				</View>

				<View style={styles.categoryContainer}>
					<Event
						title="Example Title"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
						location="Ducklake"
						eventImage="../assets/Duckfeeding.avif"
						noGoing={10}
						imageGoing1="../assets/going1.jpg"
						imageGoing2="../assets/going2.jpg"
						imageGoing3="../assets/going3.jpg"
					/>
					<Event
						title="Example Title"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
						location="Ducklake"
						eventImage="../assets/Duckfeeding.avif"
						noGoing={10}
						imageGoing1="../assets/going1.jpg"
						imageGoing2="../assets/going2.jpg"
						imageGoing3="../assets/going3.jpg"
					/>
					<Event
						title="Example Title"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
						location="Ducklake"
						eventImage="../assets/Duckfeeding.avif"
						noGoing={10}
						imageGoing1="../assets/going1.jpg"
						imageGoing2="../assets/going2.jpg"
						imageGoing3="../assets/going3.jpg"
					/>
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
	categoryContainer: {
		display: "flex",
		flexDirection: "row",
		marginTop: 20,
	},
});

export default Eventpage;
