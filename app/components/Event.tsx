import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCoffee, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { inlineStyles } from "react-native-svg";

const eventWidth = 0.45 * Dimensions.get("window").width;
const eventHeight = 0.25 * Dimensions.get("window").height;
const imageWidth = 0.45 * Dimensions.get("window").width;
const imagetHeight = 0.5 * eventHeight;

const Event = ({ eventData }: { eventData: any }) => {
	return (
		<View style={styles.container}>
			<>
				<Image
					source={{ uri: eventData.eventImage }}
					style={styles.image}
				/>
			</>
			<View style={styles.contentContainer}>
				<Text style={styles.title}>{eventData.title}</Text>
				<Text style={styles.description}>{eventData.description}</Text>
				<FontAwesomeIcon
					icon={faLocationDot}
					size={22}
					style={styles.icon}
				/>
				<Text style={styles.location}>{eventData.location}</Text>
				<View style={styles.goingContainer}>
					<Image
						source={{ uri: eventData.imageGoing1 }}
						style={styles.goingImg}
					/>
					<Image
						source={{ uri: eventData.imageGoing2 }}
						style={styles.goingImg}
					/>
					<Image
						source={{ uri: eventData.imageGoing3 }}
						style={styles.goingImg}
					/>
					<Text style={styles.goingText}>
						+{eventData.noGoing} Going
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		width: eventWidth,
		height: eventHeight,
		display: "flex",
		margin: 20,
		marginBottom: 50,
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2.2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.3,

		elevation: 8,
		overflowY: "visible",
	},
	contentContainer: {
		backgroundColor: "#fff",
		padding: 10,
		display: "flex",
		flexWrap: "wrap",
		alignItems: "flex-start",
		flexDirection: "row",
	},

	image: {
		width: imageWidth,
		height: imagetHeight,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	title: {
		fontSize: 29,
		fontWeight: "bold",
	},
	description: {
		fontSize: 25,
		color: "#747688",
	},
	icon: { marginTop: 17, marginLeft: 10, marginRight: 10 },
	location: {
		fontSize: 25,
		marginTop: 10,
		marginRight: 40,
	},
	goingContainer: {
		marginTop: 7,
		display: "flex",
		flexWrap: "wrap",
		alignItems: "flex-end",
		flexDirection: "row",
	},
	goingText: {
		marginLeft: 10,
		fontSize: 25,
		marginTop: 5,
		color: "#000",
	},
	goingImg: {
		marginTop: 5,
		marginLeft: -5,
		height: 35,
		width: 35,
		borderRadius: 100,
	},
});

export default Event;
