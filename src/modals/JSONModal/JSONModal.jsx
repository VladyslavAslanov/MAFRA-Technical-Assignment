import React from "react"
import { styles } from "./JSONModalStyles"
import { Button, Modal, ScrollView, Text, View } from "react-native"

const JSONModal = ({ modalVisible, closeModal, jsonData }) => {
	return (
		<View>
			<Modal
				animationType="slide"
				transparent={false}
				visible={modalVisible}
				onRequestClose={closeModal}>
				<View style={styles.modalFull}>
					<ScrollView style={styles.modalScrollView}>
						<Text style={styles.modalText}>{jsonData}</Text>
					</ScrollView>
					<View style={styles.modalButtonContainer}>
						<Button onPress={closeModal} title="Close" />
					</View>
				</View>
			</Modal>
		</View>
	)
}

export default JSONModal