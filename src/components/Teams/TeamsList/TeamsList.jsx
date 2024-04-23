import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./TeamsListStyles"
import RemoveButton from "../../../atoms/RemoveButton/RemoveButton"

const TeamsList = ({ teams, openModal, onDeleteTeam }) => {
	return (
		<>
			{teams.map((team) => (
				<View key={team.id} style={[styles.team, { borderColor: team.color }]}>
					<TouchableOpacity style={styles.teamTouchable} onPress={() => openModal(team)}>
						<Text style={styles.teamName}>
							{team.name.length > 15 ? `${team.name.substring(0, 15)}...` : team.name}
						</Text>
						<Text style={styles.teamPlayersCount}>Total: {team.players.length}</Text>
					</TouchableOpacity>
					<RemoveButton onPress={() => onDeleteTeam(team.id)} />
				</View>
			))}
		</>
	)
}

export default TeamsList