import React from "react";
import { Text, ScrollView, View } from "react-native";
import Event from "./Event";

const Category = ({
	categoryData,
	events,
}: {
	categoryData: any;
	events: any;
}) => {
	return (
		<View >
			<View>
				<Text style={{ fontSize: 34, marginLeft: 20 }}>
					{categoryData.name}
				</Text>
			</View>
			<ScrollView horizontal={true}>
				{events.map((item: any) => {
					return <Event eventData={item} />;
				})}
			</ScrollView>
		</View>
	);
};

export default Category;
