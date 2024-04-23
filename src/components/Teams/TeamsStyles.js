import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	scrollView: {
		flex: 1
	}, container: {
		flex: 1, gap: 10
	}, input: {
		height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 10
	}, modalContent: {
		marginTop: 50, padding: 20
	}, modalHeader: {
		fontSize: 18, fontWeight: "bold", marginBottom: 20
	}, player: {
		marginBottom: 10
	}, playerName: {
		fontSize: 16, marginBottom: 10
	}, modalFull: {
		flex: 1, justifyContent: "space-between", marginTop: 60
	}, modalScrollView: {
		flex: 1, paddingHorizontal: 20, paddingTop: 20
	}, modalButtonContainer: {
		marginBottom: 30
	}
})