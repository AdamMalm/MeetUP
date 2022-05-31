import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

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
					width: 90,
					height: 80,
					justifyContent: "center",
					borderRadius: 22,
					marginTop: 20,
					zIndex: 1,
				}}
			>
				<Button
					buttonStyle={{ marginTop: 3.5, backgroundColor: "white" }}
					icon={
						<Ionicons
							name="ios-search-outline"
							size={52}
							color="black"
						/>
					}
				/>
			</View>
		</>
	);
};
export default SearchButton;
