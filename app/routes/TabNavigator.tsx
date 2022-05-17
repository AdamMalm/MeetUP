import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Contactpage from "../screens/Contactpage";
import CreateEventpage from "../screens/CreateEventpage";
import Eventpage from "../screens/Eventpage";
import Timelinepage from "../screens/Timelinepage";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Events Explorer" component={Eventpage} />
			<Tab.Screen name="Chat Rooms" component={Contactpage} />
			<Tab.Screen name="Cantact List" component={Contactpage} />
			<Tab.Screen name="Timeline" component={Timelinepage} />
			<Tab.Screen name="Event Creator" component={CreateEventpage} />
		</Tab.Navigator>
	);
};
export default BottomTabNavigator;
