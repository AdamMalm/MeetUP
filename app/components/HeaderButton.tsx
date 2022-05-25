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
					justifyContent: "center",
					borderRadius: 18,
					marginTop: 14,
					zIndex: 1,
				}}
			>
				<Button
					buttonStyle={{ backgroundColor: "#FFFFFF" }}
					icon={<Icon name="user-o" size={52} color="black" />}
				/>
				<Button
					buttonStyle={{ backgroundColor: "#FFFFFF" }}
					icon={<Icon name="bell-o" size={52} color="black" />}
				/>
			</View>
		</>
	);
};
export default HeaderButton;
