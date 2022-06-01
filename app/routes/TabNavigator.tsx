import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Contactpage from "../screens/Contactpage";
import Chatpage from "../screens/Chatpage";
import CreateEventpage from "../screens/CreateEventpage";
import Eventpage from "../screens/Eventpage";
import Timelinepage from "../screens/Timelinepage";
import StackNavigator from "./StackNavigator";
import { Dimensions } from "react-native"

import Ionicons from "react-native-vector-icons/Ionicons";

const fontWidth = Dimensions.get("window").width;

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Events Explorer"
			screenOptions={({ route }) => ({
				tabBarStyle: {
					position: "absolute",
					height: fontWidth*0.085,
				},

				tabBarIconStyle: { width: 65 },
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Events Explorer") {
						iconName = focused ? "grid" : "grid-outline";
					} else if (route.name === "Chat Rooms") {
						iconName = focused
							? "chatbubbles"
							: "chatbubbles-outline";
					} else if (route.name === "Cantact List") {
						iconName = focused
							? "ios-people-sharp"
							: "ios-people-outline";
					} else if (route.name === "Timeline") {
						iconName = focused ? "calendar" : "calendar-outline";
					} else if (route.name === "Event Creator") {
						iconName = focused
							? "add-circle"
							: "add-circle-outline";
					}
					// You can return any component that you like here!
					return <Ionicons name={iconName} size={fontWidth*0.055} color={color} />;
				},
				tabBarActiveTintColor: "#4F1271",
				tabBarInactiveTintColor: "#120D26",
			})}
		>
			<Tab.Screen
				options={{
					headerShown: false,
					tabBarShowLabel: false,
				}}
				name="Cantact List"
				component={Contactpage}
			/>
			<Tab.Screen
				options={{
					headerShown: false,
					tabBarShowLabel: false,
				}}
				name="Chat Rooms"
				component={Chatpage}
			/>
			<Tab.Screen
				options={{
					headerShown: false,
					tabBarShowLabel: false,
				}}
				name="Events Explorer"
				component={Eventpage}
			/>
			<Tab.Screen
				options={{
					headerShown: false,
					tabBarShowLabel: false,
				}}
				name="Timeline"
				component={Timelinepage}
			/>
			<Tab.Screen
				options={{
					headerShown: false,
					tabBarShowLabel: false,
				}}
				name="Event Creator"
				component={CreateEventpage}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
