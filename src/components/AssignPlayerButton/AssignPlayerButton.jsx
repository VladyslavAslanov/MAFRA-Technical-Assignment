import React, { useState } from "react"
import { Text, TouchableOpacity } from "react-native"
import { styles } from "./AssignPlayerButtonStyles"
import ChooseTeamModal from "../../modals/ChooseTeamModal/ChooseTeamModal"

const AssignPlayerButton = ({ player, onAssignPlayerToTeam, onUnassignPlayerFromTeam, teams }) => {
	const [isModalVisible, setModalVisible] = useState(false)

	const toggleModal = () => {
		setModalVisible(prevState => !prevState)
	}

	const isPlayerAlreadyInTeam = player.teamId

	return (
		<>
			{isPlayerAlreadyInTeam ? (
				<TouchableOpacity
					style={[styles.button, styles.unassignButton]}
					onPress={() => onUnassignPlayerFromTeam(player.id)}>
					<Text style={styles.assignButtonText}>Unassign</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					style={[styles.button, styles.assignButton]}
					onPress={toggleModal}>
					<Text style={styles.assignButtonText}>Assign</Text>
				</TouchableOpacity>
			)}
			<ChooseTeamModal
				isModalVisible={isModalVisible}
				toggleModal={toggleModal}
				player={player}
				teams={teams}
				onAssignPlayerToTeam={onAssignPlayerToTeam} />
		</>
	)
}

export default AssignPlayerButton
