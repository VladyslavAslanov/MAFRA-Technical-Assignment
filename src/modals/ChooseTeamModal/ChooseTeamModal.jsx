import React from "react"
import { Button, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./ChooseTeamModalStyles"
import Modal from "react-native-modal"

const ChooseTeamModal = ({ isModalVisible, toggleModal, player, teams, onAssignPlayerToTeam }) => {
	return (
		<Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
			<View style={styles.modalContainer}>
				<Text style={styles.modalHeader}>Assign {player.name} to a team</Text>
				{teams.map(team => (<TouchableOpacity key={team.id} style={styles.modalTeam} onPress={() => {
					onAssignPlayerToTeam(team.id, player.id)
					toggleModal()
				}}>
					<Text style={styles.modalTeamText}>{team.name}</Text>
				</TouchableOpacity>))}
				<Button title="Close" onPress={toggleModal} />
			</View>
		</Modal>
	)
}

export default ChooseTeamModal