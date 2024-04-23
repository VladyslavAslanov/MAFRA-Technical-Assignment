import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	button: { padding: 5, width: 70, borderRadius: 10, alignItems: "center" },
	unassignButton: { backgroundColor: "red" }, assignButton: {
		backgroundColor: "green"
	}, assignButtonText: {
		color: "white"
	}, modalContainer: {
		backgroundColor: "white", padding: 20, borderRadius: 10
	}, modalHeader: {
		fontSize: 18, fontWeight: "bold", marginBottom: 10
	}, modalTeam: {
		padding: 10, borderBottomWidth: 1, borderBottomColor: "gray"
	}, modalTeamText: {
		fontSize: 16
	}
})