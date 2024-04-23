import React from "react"
import { Button, Image, Modal, Text, View } from "react-native"
import { styles } from "./PreviewPlayersPhotoModalStyles"

const PreviewPlayersPhotoModal = ({ modalVisible, closeModal, selectedPlayer }) => {
	return (
		<Modal
			animationType="slide"
			transparent={false}
			visible={modalVisible}
			onRequestClose={closeModal}>
			<View style={styles.modalFull}>
				<View style={styles.topContainer}>
					<Text style={styles.modalHeader}>{selectedPlayer.name}</Text>
					{selectedPlayer.photoPath ?
						<Image source={{ uri: selectedPlayer.photoPath }} style={styles.image} /> : <Text>
							This player doesn't have a photo
						</Text>}
				</View>
				<View style={styles.modalButtonContainer}>
					<Button onPress={closeModal} title="Close" />
				</View>
			</View>
		</Modal>
	)
}

export default PreviewPlayersPhotoModal