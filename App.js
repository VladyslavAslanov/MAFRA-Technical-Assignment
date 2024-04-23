import React, { useState } from "react"
import { Button, ScrollView, View } from "react-native"
import { styles } from "./AppStyles"
import Teams from "./src/components/Teams/Teams"
import Players from "./src/components/Players/Players"
import "react-native-get-random-values"
import { v4 as uuid } from "uuid"
import JSONModal from "./src/modals/JSONModal/JSONModal"

const App = () => {
	const [teams, setTeams] = useState([])
	const [players, setPlayers] = useState([])
	const [modalVisible, setModalVisible] = useState(false)
	const [jsonData, setJsonData] = useState("")

	const getRandomColor = () => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16)
		return "#" + randomColor.padStart(6, "0")
	}

	const addTeam = (teamName) => {
		const newColor = getRandomColor()
		setTeams((prevTeams) => [...prevTeams, {
			id: `teamID-${uuid()}`, name: teamName, color: newColor, players: []
		}])
	}

	const addPlayer = (playerName) => {
		setPlayers((prevPlayers) => [...prevPlayers, {
			id: `playerID-${uuid()}`, name: playerName, color: null, teamId: null, photoPath: null
		}])
	}

	const deleteTeam = (teamId) => {
		const team = teams.find(t => t.id === teamId)
		if (!team) return

		setTeams((prevTeams) => prevTeams.filter((team) => team.id !== teamId))
		setPlayers((prevPlayers) => prevPlayers.map(player => {
			if (player.color === team.color) {
				return { ...player, color: null, teamId: null }
			}
			return player
		}))
	}

	const deletePlayer = (playerId) => {
		const updatedPlayers = players.filter(player => player.id !== playerId)
		setPlayers(updatedPlayers)

		const updatedTeams = teams.map(team => {
			const filteredPlayers = team.players.filter(player => player.id !== playerId)
			return {
				...team, players: filteredPlayers
			}
		})
		setTeams(updatedTeams)
	}

	const assignPlayerToTeam = (teamId, playerId) => {
		const team = teams.find(team => team.id === teamId)
		const isAlreadyAssigned = team.players.find(player => player.id === playerId)

		if (!isAlreadyAssigned) {
			const updatedTeams = teams.map((team) => team.id === teamId ? {
				...team, players: [...team.players, {
					...players.find((player) => player.id === playerId), color: team.color, teamId: teamId
				}]
			} : team)
			setTeams(updatedTeams)

			setPlayers((prevPlayers) => prevPlayers.map(player => player.id === playerId ? {
				...player, color: team.color, teamId: teamId
			} : player))
		} else {
			alert("This player is already assigned to a team.")
		}
	}

	const onUnassignPlayerFromTeam = (playerId) => {
		setPlayers(prevPlayers => prevPlayers.map(player => {
			if (player.id === playerId) {
				return { ...player, teamId: null, color: null }
			}
			return player
		}))

		setTeams(prevTeams => prevTeams.map(team => {
			const newPlayers = team.players.filter(player => player.id !== playerId)
			return { ...team, players: newPlayers }
		}))
	}

	const saveData = () => {
		const data = {
			teams: teams, players: players
		}
		setJsonData(JSON.stringify(data, null, 2))
		setModalVisible(true)
	}

	const closeModal = () => {
		setModalVisible(false)
	}

	return (
		<View style={styles.fullScreen}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.container}>
					<View style={styles.row}>
						<View style={styles.column}>
							<Teams teams={teams} onAddTeam={addTeam} onDeleteTeam={deleteTeam} />
						</View>
						<View style={styles.column}>
							<Players
								teams={teams}
								players={players}
								onAddPlayer={addPlayer}
								setTeams={setTeams}
								setPlayers={setPlayers}
								onDeletePlayer={deletePlayer}
								onAssignPlayerToTeam={assignPlayerToTeam}
								onUnassignPlayerFromTeam={onUnassignPlayerFromTeam} />
						</View>
					</View>
				</View>
			</ScrollView>
			<View style={styles.buttonContainer}>
				<Button title="Save" onPress={saveData} />
			</View>
			<JSONModal modalVisible={modalVisible} closeModal={closeModal} jsonData={jsonData} />
		</View>
	)
}

export default App
