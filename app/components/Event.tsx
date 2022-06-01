import React from "react";
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCoffee, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { RootStackParamList } from "../config/types"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const eventWidth = 0.45 * Dimensions.get("window").width;
const eventHeight = 0.25 * Dimensions.get("window").height;
const imageWidth = 0.45 * Dimensions.get("window").width;
const imageHeight = 0.5 * eventHeight;
const fontWidth = Dimensions.get("window").width;

const Event = ({ eventData }: { eventData: any }) => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={ () => {
					navigation.navigate('DetailedEventpage', eventData)
				}}
			>
				<Image
					source={{ uri: eventData.eventImage }}
					style={styles.image}
				/>
				<View style={styles.contentContainer}>
						<Text style={styles.title}>{eventData.title}</Text>
						<Text style={styles.description}>{eventData.description}</Text>
						<View style={styles.rowContainer}>
							<FontAwesomeIcon
								icon={faLocationDot}
								size={fontWidth*0.019}
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
			</TouchableOpacity>
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
		marginBottom: 60,
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2.2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.3,

		elevation: 16,
	},
	contentContainer: {
		backgroundColor: "#fff",
		padding: fontWidth*0.01,
		display: "flex",
		flexWrap: "wrap",
		alignItems: "flex-start",
		flexDirection: "row",
	},
	rowContainer: {
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	image: {
		width: imageWidth,
		height: imageHeight,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	title: {
		fontSize: fontWidth*0.026,
		fontWeight: "bold",
	},
	description: {
		fontSize: fontWidth*0.022,
		color: "#747688",
	},
	icon: { marginTop: 17, marginLeft: 10, marginRight: 10 },
	location: {
		fontSize: fontWidth*0.022,
		marginTop: 10,
		marginRight: fontWidth*0.046,
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
		fontSize: fontWidth*0.022,
		marginTop: 5,
		color: "#000",
	},
	goingImg: {
		marginTop: 5,
		marginLeft: -5,
		height: fontWidth*0.03125,
		width: fontWidth*0.03125,
		borderRadius: 100,
	},
});

export default Event;
