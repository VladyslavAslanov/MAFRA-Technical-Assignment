import React from "react"
import { Button, Image, Modal, ScrollView, Text, View } from "react-native"
import { styles } from "./PlayersInTeamModalStyles"

const PlayersInTeamModal = ({ modalVisible, closeModal, selectedTeam }) => {
	return (
		<Modal
			animationType="slide"
			transparent={false}
			visible={modalVisible}
			onRequestClose={closeModal}>
			<View style={styles.modalFull}>
				<ScrollView style={styles.modalScrollView}>
					<Text style={styles.modalHeader}>Players in {selectedTeam.name}</Text>
					{selectedTeam.players.map((player) => (
						<View key={player.id} style={styles.player}>
							<Text style={styles.playerName}>{player.name}</Text>
							{player.photoPath ?
								<Image source={{ uri: player.photoPath }} style={{ width: 150, height: 150 }} /> : null}
						</View>
					))}
				</ScrollView>
				<View style={styles.modalButtonContainer}>
					<Button title="Close" onPress={closeModal} />
				</View>
			</View>
		</Modal>
	)
}

export default PlayersInTeamModal