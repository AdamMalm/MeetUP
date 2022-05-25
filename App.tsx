import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./app/routes/TabNavigator";
import Eventprovider from './app/config/Eventprovider'
import Background from "./app/components/Background";

export default function App() {
	return (
		<NavigationContainer>
			<Eventprovider>
				<BottomTabNavigator/>
			</Eventprovider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
