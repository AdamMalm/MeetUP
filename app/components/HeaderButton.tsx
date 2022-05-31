import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const HeaderButton = () => {
	return (
		<>
			<View
				style={{
					backgroundColor: "#FFFFFF",
					flexDirection: "row",
					position: "absolute",
					top: 10,
					right: 10,
					width: 155,
					height: 80,
					justifyContent: "center",
					borderRadius: 22,
					marginTop: 20,
					zIndex: 1,
				}}
			>
				<Button
					buttonStyle={{ marginTop: 5, backgroundColor: "#FFFFFF" }}
					icon={<Icon name="user-o" size={52} color="black" />}
				/>
				<Button
					buttonStyle={{ marginTop: 5, backgroundColor: "#FFFFFF" }}
					icon={<Icon name="bell-o" size={52} color="black" />}
				/>
			</View>
		</>
	);
};
export default HeaderButton;
