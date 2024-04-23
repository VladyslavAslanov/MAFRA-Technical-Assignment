import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container: {
		flex: 1, gap: 10
	}, header: {
		fontSize: 18, fontWeight: "bold"
	}, input: {
		height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 10
	}, player: {
		borderWidth: 3,
		borderColor: "gray",
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		position: "relative"
	}, playerInfo: {
		gap: 5
	}, playerName: {
		fontSize: 16
	}, deleteButton: {
		backgroundColor: "red",
		padding: 5,
		borderRadius: 20,
		width: 25,
		height: 25,
		justifyContent: "center",
		alignItems: "center"
	}, deleteButtonText: {
		color: "white", fontSize: 14
	}, buttonsContainer: {
		alignItems: "center",
		gap: 10,
		flexDirection: "row"
	}
})