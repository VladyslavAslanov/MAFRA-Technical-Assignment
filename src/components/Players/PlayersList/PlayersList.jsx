import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "../PlayersStyles"
import AssignPlayerButton from "../../AssignPlayerButton/AssignPlayerButton"
import Icon from "react-native-vector-icons/MaterialIcons"
import RemoveButton from "../../../atoms/RemoveButton/RemoveButton"

const PlayersList = ({
											 players,
											 teams,
											 openModal,
											 findPlayerTeam,
											 setCameraModalVisible,
											 setCurrentPlayerId,
											 onDeletePlayer,
											 onAssignPlayerToTeam,
											 onUnassignPlayerFromTeam
										 }) => {
	return (
		<>
			{players.map((player) => (
				<TouchableOpacity
					key={player.id}
					onPress={() => openModal(player)}
					style={[styles.player, { borderColor: player.color }]}>
					<View style={styles.playerInfo}>
						<Text style={styles.playerName}>
							{player.name.length > 15 ? `${player.name.substring(0, 15)}...` : player.name}
							{findPlayerTeam(player.id) && ` (${findPlayerTeam(player.id).length > 12
								? `${findPlayerTeam(player.id).substring(0, 12)}...`
								: findPlayerTeam(player.id)})`}
						</Text>
						{teams.length > 0 && (
							<AssignPlayerButton
								teams={teams}
								player={player}
								onAssignPlayerToTeam={onAssignPlayerToTeam}
								onUnassignPlayerFromTeam={onUnassignPlayerFromTeam}
							/>
						)}
					</View>
					<View style={styles.buttonsContainer}>
						<TouchableOpacity onPress={() => {
							setCameraModalVisible(true)
							setCurrentPlayerId(player.id)
						}}>
							<Icon name="camera-alt" size={30} color="#000" />
						</TouchableOpacity>
						<RemoveButton onPress={() => onDeletePlayer(player.id)} />
					</View>
				</TouchableOpacity>
			))}
		</>
	)
}

export default PlayersList