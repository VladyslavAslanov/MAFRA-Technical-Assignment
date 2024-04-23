import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	team: {
		borderWidth: 3,
		borderColor: "gray",
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	}, teamTouchable: {
		flex: 1
	}, teamName: {
		fontSize: 16
	}, teamPlayersCount: {
		fontSize: 14
	}
})