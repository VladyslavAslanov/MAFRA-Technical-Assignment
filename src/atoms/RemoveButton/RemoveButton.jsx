import React from "react"
import { styles } from "./RemoveButtonStyles"
import { Text, TouchableOpacity } from "react-native"

const RemoveButton = ({ onPress }) => {
	return (
		<TouchableOpacity style={styles.deleteButton} onPress={onPress}>
			<Text style={styles.deleteButtonText}>X</Text>
		</TouchableOpacity>
	)
}

export default RemoveButton