import React from "react";
import { View, Dimensions } from "react-native";
import { Button } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

const fontWidth = Dimensions.get("window").width;

const SearchButton = () => {
	return (
		<>
			<View
				style={{
					backgroundColor: "#FFFFFF",
					flexDirection: "row",
					position: "absolute",
					top: 10,
					right: 181,
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
					buttonStyle={{ margin: 3.5, backgroundColor: "white" }}
					icon={
						<Ionicons
							name="ios-search-outline"
							size={fontWidth*0.049}
							color="black"
						/>
					}
				/>
			</View>
		</>
	);
};
export default SearchButton;
