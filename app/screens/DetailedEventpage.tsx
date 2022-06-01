import React from "react";
import {
	View,
	Text,
	Image,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../config/types";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useSession } from "../config/Eventprovider";

type Props = NativeStackScreenProps<RootStackParamList, "DetailedEventpage">;

const windowWidth = Dimensions.get("window").width;
const buttonWidth = 0.175 * windowWidth;
const imageWidth = Dimensions.get("window").width;
const imageHeight = 0.35 * Dimensions.get("window").height;
const headerHeight =  0.25 * imageHeight;
const fontWidth = Dimensions.get("window").width;

const DetailedEventpage = ({ route, navigation }: Props) => {
	const { personalEventList, registerEvent } = useSession();

	return (
		<View>
			<View>
				<Image
					source={{ uri: route.params.eventImage }}
					style={styles.image}
				/>
				<LinearGradient
					colors={["rgba(0,0,0,0.8)", "transparent"]}
					style={styles.header}
				>
					<TouchableOpacity
						style={styles.backButton}
						onPress={() => {
							navigation.goBack();
						}}
					>
						<Ionicons
							name="arrow-back-outline"
							size={fontWidth*0.054}
							color="black"
						/>
					</TouchableOpacity>
				</LinearGradient>
			</View>
			<View style={styles.infoContainer}>
        <View style={styles.ohgodplease}>
          <Text style={styles.title}>{route.params.title}</Text>
          <TouchableOpacity
              style={styles.registerButton}
              onPress={() => {
                registerEvent(route.params);
              }}
            >
            <Text style={styles.buttonText}>Join Event</Text>
          </TouchableOpacity>
        </View>
				<View style={styles.goingView}>
					<Image
						source={{ uri: route.params.imageGoing1 }}
						style={styles.goingImg}
					/>
					<Image
						source={{ uri: route.params.imageGoing2 }}
						style={styles.goingImg}
					/>
					<Image
						source={{ uri: route.params.imageGoing3 }}
						style={styles.goingImg}
					/>
					<Text style={styles.goingText}>
						+going {route.params.noGoing}
					</Text>
				</View>
				<View style={styles.timeView}>
					<Ionicons name="time-outline" size={fontWidth*0.032} color="black" />
					<Text style={styles.time}>
						{" "}
						Tuesday, 12 June 2022{"\n"} at 10:15-12:15
					</Text>
				</View>
				<View style={styles.goingView}>
					<Text style={styles.goingText}>
						<Ionicons
							name="globe-outline"
							size={fontWidth*0.032}
							color="black"
						/>{" "}
						Public event
					</Text>
				</View>
				<View style={styles.locationView}>
					<Ionicons name="location-outline" size={fontWidth*0.032} color="black" />
					<Text style={styles.location}>{route.params.location}</Text>
				</View>
			</View>
			<View style={styles.aboutView}>
				<Text style={styles.about}>About the event</Text>
				<Text style={styles.description}>
					{route.params.description}
				</Text>
			</View>
      <TouchableOpacity style={styles.shareButton}>
					<Ionicons
						
						name="share-social-outline"
						size={fontWidth*0.032}
						color="white"
					/>
					<Text style={styles.shareButtonText}>
						Share with contacts
					</Text>
				</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		position: "absolute",
		width: windowWidth,
		height: headerHeight,
	},
	image: {
		width: imageWidth,
		height: imageHeight,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	backButton: {
		position: "absolute",
		backgroundColor: "white",
		margin: 30,
		padding: 6,
		paddingRight: 10,
		paddingLeft: 14,
		borderRadius: 22,
	},
	infoContainer: {
		flexDirection: "column",
		alignContent: "flex-start",
		width: "100%",
	},
	registerButton: {
		marginTop: 15,
    marginBottom: 15,
		justifyContent: "center",
		backgroundColor: "#4F1271",
		maxWidth: buttonWidth,
		borderRadius: 8,
	},
	buttonText: {
		padding: 20,
		color: "white",
		textAlign: "center",
		fontSize: fontWidth*0.022,
	},
	shareButton: {
    justifyContent: "space-around",
		flexDirection: "row",
		backgroundColor: "#4F1271",
    maxWidth: fontWidth*0.34,
		borderRadius: 8,
		marginTop: 33,
    marginLeft: 40,
    padding: 20,
    margin: "auto",
	},
	shareButtonText: {
		color: "white",
		textAlign: "center",
		fontSize: fontWidth*0.022,
    
	},
	title: {
		fontSize: fontWidth*0.034,
		marginTop: 30,
		fontWeight: "bold",
		marginBottom: 30,
	},
	timeView: {
		marginLeft: 40,
		flexDirection: "row",
	},
	time: {
		marginLeft: 10,
		fontSize: fontWidth*0.022,
		marginBottom: 30,
	},
	locationView: {
		flexDirection: "row",
		marginLeft: 40,
	},
	location: {
		marginLeft: 10,
		fontSize: fontWidth*0.022,
		marginBottom: 30,
	},
	aboutView: {
    marginLeft: 40,
		marginTop: 30,
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		width: "100%",
		alignItems: "stretch",
	},
	about: {
		fontSize: fontWidth*0.027,
		marginBottom: 8,
		fontWeight: "bold",
	},
	description: {
		fontSize: fontWidth*0.022,
		marginBottom: 30,
	},
	goingView: {
		paddingTop: 20,
		marginTop: 7,
		flex: 1,
		display: "flex",
		flexWrap: "wrap",
		alignContent: "flex-end",
		flexDirection: "column",
	},
	goingImg: {
		marginTop: 5,
		marginLeft: -5,
		height: 35,
		width: 35,
		borderRadius: 100,
	},
	goingText: {
		marginRight: 40,
		marginLeft: 10,
		fontSize: fontWidth*0.022,
		marginTop: 5,
		color: "black",
	},
  ohgodplease: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  }
});

export default DetailedEventpage;
