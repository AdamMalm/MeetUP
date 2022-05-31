import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./app/routes/StackNavigator";
import Eventprovider from './app/config/Eventprovider'

export default function App() {
	return (
		<NavigationContainer>
			<Eventprovider>
				<StackNavigator/>
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
