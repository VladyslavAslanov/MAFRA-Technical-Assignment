import React, { useEffect, useState } from "react"
import { Button, Text, TextInput, View } from "react-native"
import { styles } from "./PlayersStyles"
import { Camera } from "expo-camera"
import * as FileSystem from "expo-file-system"
import Title from "../../atoms/Title/Title"
import PlayersList from "./PlayersList/PlayersList"
import CameraModal from "../../modals/CameraModal/CameraModal"
import PreviewPlayersPhotoModal from "../../modals/PreviewPlayersPhotoModal/PreviewPlayersPhotoModal"

const Players = ({
									 players,
									 onAddPlayer,
									 onDeletePlayer,
									 setPlayers,
									 setTeams,
									 onAssignPlayerToTeam,
									 onUnassignPlayerFromTeam,
									 teams
								 }) => {
	const [playerInput, setPlayerInput] = useState("")
	const [cameraModalVisible, setCameraModalVisible] = useState(false)
	const [hasPermission, setHasPermission] = useState(null)
	const [cameraRef, setCameraRef] = useState(null)
	const [currentPlayerId, setCurrentPlayerId] = useState(null)
	const [modalVisible, setModalVisible] = useState(false)
	const [selectedPlayer, setSelectedPlayer] = useState(null)

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync()
			setHasPermission(status === "granted")
		})()
	}, [])

	const takePicture = async () => {
		if (cameraRef && currentPlayerId) {
			const options = { quality: 0.5, base64: true }
			const data = await cameraRef.takePictureAsync(options)

			const photoDirectory = `${FileSystem.documentDirectory}photos/`
			const filePath = `${photoDirectory}${Date.now()}.jpg`

			const dirInfo = await FileSystem.getInfoAsync(photoDirectory)
			if (!dirInfo.exists) {
				await FileSystem.makeDirectoryAsync(photoDirectory, { intermediates: true })
			}

			await FileSystem.moveAsync({
				from: data.uri,
				to: filePath
			})

			setPlayers(prevPlayers => prevPlayers.map(player => {
				if (player.id === currentPlayerId) {
					return { ...player, photoPath: filePath }
				}
				return player
			}))

			setTeams(prevTeams => prevTeams.map(team => {
				const teamPlayers = team.players.map(player => {
					if (player.id === currentPlayerId) {
						return { ...player, photoPath: filePath }
					}
					return player
				})
				return { ...team, players: teamPlayers }
			}))

			setCameraModalVisible(false)
		}
	}

	const findPlayerTeam = (playerId) => {
		const team = teams.find(team => team.players.some(player => player.id === playerId))
		return team ? team.name : null
	}

	const handleAddPlayer = () => {
		if (playerInput.trim() === "") {
			alert("Please enter a player name")
			return
		}
		onAddPlayer(playerInput)
		setPlayerInput("")
	}

	const openModal = (player) => {
		setSelectedPlayer(player)
		setModalVisible(true)
	}

	const closeModal = () => {
		setModalVisible(false)
		setSelectedPlayer(null)
	}

	if (hasPermission === null) {
		return <View />
	}

	if (hasPermission === false) {
		return <Text>No access to camera</Text>
	}

	return (
		<View style={styles.container}>
			<Title
				title="Players"
			/>

			<TextInput
				style={styles.input}
				placeholder="Enter player name"
				onChangeText={setPlayerInput}
				value={playerInput}
			/>

			<Button
				title="Add Player"
				onPress={handleAddPlayer}
			/>

			<PlayersList
				players={players}
				teams={teams}
				openModal={openModal}
				findPlayerTeam={findPlayerTeam}
				setCameraModalVisible={setCameraModalVisible}
				setCurrentPlayerId={setCurrentPlayerId}
				onDeletePlayer={onDeletePlayer}
				onAssignPlayerToTeam={onAssignPlayerToTeam}
				onUnassignPlayerFromTeam={onUnassignPlayerFromTeam}
			/>

			<CameraModal
				cameraModalVisible={cameraModalVisible}
				setCameraModalVisible={setCameraModalVisible}
				setCameraRef={setCameraRef}
				takePicture={takePicture}
			/>

			{selectedPlayer &&
				<PreviewPlayersPhotoModal
					modalVisible={modalVisible}
					closeModal={closeModal}
					selectedPlayer={selectedPlayer}
				/>
			}
		</View>
	)
}

export default Players
