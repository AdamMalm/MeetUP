import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Contactpage from "../screens/Contactpage";
import CreateEventpage from "../screens/CreateEventpage";
import Eventpage from "../screens/Eventpage";
import Timelinepage from "../screens/Timelinepage";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Events Explorer"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Events Explorer") {
						iconName = focused ? "grid-outline" : "grid-outline";
					} else if (route.name === "Chat Rooms") {
						iconName = focused
							? "chatbubbles-outline"
							: "chatbubbles-outline";
					} else if (route.name === "Cantact List") {
						iconName = focused
							? "person-outline"
							: "person-outline";
					} else if (route.name === "Timeline") {
						iconName = focused
							? "calendar-outline"
							: "calendar-outline";
					} else if (route.name === "Event Creator") {
						iconName = focused
							? "add-circle-outline"
							: "add-circle-outline";
					}

					// You can return any component that you like here!
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
				tabBarActiveTintColor: "#4F1271",
				tabBarInactiveTintColor: "#120D26",
			})}
		>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
				}}
				name="Cantact List"
				component={Contactpage}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
				}}
				name="Chat Rooms"
				component={Contactpage}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
				}}
				name="Events Explorer"
				component={Eventpage}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
				}}
				name="Timeline"
				component={Timelinepage}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
				}}
				name="Event Creator"
				component={CreateEventpage}
			/>
		</Tab.Navigator>
	);
};
export default BottomTabNavigator;
