import React from "react";
import { Text, ScrollView, View, Dimensions } from "react-native";
import Event from "./Event";

const fontWidth = Dimensions.get("window").width;

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
				<Text style={{ fontSize: fontWidth*0.031, marginLeft: 20 }}>
					{categoryData.name}
				</Text>
			</View>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				{events.map((item: any, i: number) => {
					return <Event eventData={item} key={i}/>;
				})}
			</ScrollView>
		</View>
	);
};

export default Category;
