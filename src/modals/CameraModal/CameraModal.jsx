import React from "react"
import { Camera } from "expo-camera"
import { Button, Modal, View } from "react-native"

const CameraModal = ({ cameraModalVisible, setCameraModalVisible, setCameraRef, takePicture }) => {
	return (
		<Modal
			animationType="slide"
			transparent={false}
			visible={cameraModalVisible}
			onRequestClose={() => setCameraModalVisible(false)}>
			<Camera
				style={{ flex: 1 }}
				type={Camera.Constants.Type.back}
				flashMode={Camera.Constants.FlashMode.off}
				ref={setCameraRef}
			>
				<View style={{
					flex: 1, flexDirection: "column", justifyContent: "flex-end", alignItems: "center", marginBottom: 20
				}}>
					<Button title="Take Photo" onPress={takePicture} />
					<Button title="Close Camera" onPress={() => setCameraModalVisible(false)} color="red" />
				</View>
			</Camera>
		</Modal>
	)
}

export default CameraModal