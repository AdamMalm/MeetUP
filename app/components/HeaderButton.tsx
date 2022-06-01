import React from "react";
import { View, Dimensions } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const fontWidth = Dimensions.get("window").width;

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
					padding: 6,
					paddingRight: 10,
					paddingLeft: 14,
					justifyContent: "center",
					borderRadius: 22,
					marginTop: 20,
					zIndex: 1,
					elevation: 2,
				}}
			>
				<Button
					buttonStyle={{ margin: 5, backgroundColor: "#FFFFFF" }}
					icon={<Icon name="user-o" size={fontWidth*0.049} color="black" />}
				/>
				<Button
					buttonStyle={{ margin: 5, backgroundColor: "#FFFFFF" }}
					icon={<Icon name="bell-o" size={fontWidth*0.049} color="black" />}
				/>
			</View>
		</>
	);
};
export default HeaderButton;
