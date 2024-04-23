import React, { useState } from "react"
import { styles } from "./TeamsStyles"
import { Button, TextInput, View } from "react-native"
import TeamsList from "./TeamsList/TeamsList"
import Title from "../../atoms/Title/Title"
import PlayersInTeamModal from "../../modals/PlayersInTeamModal/PlayersInTeamModal"

const Teams = ({ teams, onAddTeam, onDeleteTeam }) => {
	const [teamInput, setTeamInput] = useState("")
	const [modalVisible, setModalVisible] = useState(false)
	const [selectedTeam, setSelectedTeam] = useState(null)

	const handleAddTeam = () => {
		if (teamInput.trim() === "") {
			alert("Please enter a team name")
			return
		}
		onAddTeam(teamInput)
		setTeamInput("")
	}

	const openModal = (team) => {
		setSelectedTeam(team)
		setModalVisible(true)
	}

	const closeModal = () => {
		setModalVisible(false)
		setSelectedTeam(null)
	}

	return (
		<View style={styles.container}>
			<Title
				title="Teams"
			/>

			<TextInput
				style={styles.input}
				placeholder="Enter team name"
				onChangeText={(text) => setTeamInput(text)}
				value={teamInput}
			/>

			<Button
				title="Add Team"
				onPress={handleAddTeam}
			/>

			<TeamsList
				teams={teams}
				openModal={openModal}
				onDeleteTeam={onDeleteTeam}
			/>

			{selectedTeam &&
				<PlayersInTeamModal
					modalVisible={modalVisible}
					closeModal={closeModal}
					selectedTeam={selectedTeam}
				/>}
		</View>
	)
}

export default Teams
