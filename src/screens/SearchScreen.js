import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import SearchBar from "./components/SearchBar";

const SearchScreen = () => {
	return (
		<View>
			<SearchBar />
			<Text>SearchScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({});
export default SearchScreen;
