import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import {
Button,
StyleSheet,
Text,
TouchableOpacity,
View,
Image,
Alert,
} from 'react-native';
import * as Sharing from 'expo-sharing';

export default function App() {
const [facing, setFacing] = useState<CameraType>('back');
const [permission, requestPermission] = useCameraPermissions();
const [photo, setPhoto] = useState<string | null>(null);
const cameraRef = useRef<any>(null);

if (!permission) {
return <View />;
}

if (!permission.granted) {
return (
<View style={styles.container}>
<Text style={styles.message}>
We need your permission to show the camera
</Text>
<Button onPress={requestPermission} title="grant permission" />
</View>
);
}

function toggleCameraFacing() {
setFacing((current) => (current === 'back' ? 'front' : 'back'));
}

async function takePicture() {
if (cameraRef.current) {
try {
const photo = await cameraRef.current.takePictureAsync();
setPhoto(photo.uri);
} catch (error) {
console.error('Failed to take picture:', error);
}
}
}

async function sharePhoto() {
  if(photo){
    try{
      const isSharingAvailable = await Sharing.isAvailableAsync();
      if(isSharingAvailable){
        Sharing.shareAsync(photo);
    
      }
      else{
        Alert.alert('sharing not avialable');
      }
    }catch(error){
      Alert.alert('error sharing')

    }
  }

}

return (
<View style={styles.container}>
{photo ? (
<View style={styles.previewContainer}>
<Image source={{ uri: photo }} style={styles.preview} />
<View style={styles.buttonContainer}>
<TouchableOpacity
style={styles.button}
onPress={() => setPhoto(null)}>
<Text style={styles.text}>Take Another</Text>
</TouchableOpacity>
</View>
<View style={styles.buttonContainer}>
<TouchableOpacity
style={styles.button}
onPress={() => sharePhoto()}>
<Text style={styles.text}>Share photo</Text>
</TouchableOpacity>
</View>
</View>
) : (
<CameraView style={styles.camera} facing={facing} ref={cameraRef}>
<View style={styles.buttonContainer}>
<TouchableOpacity
style={styles.button}
onPress={toggleCameraFacing}>
<Text style={styles.text}>Flip</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={takePicture}>
<Text style={styles.text}>Take Photo</Text>
</TouchableOpacity>
</View>
</CameraView>
)}
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
},
message: {
textAlign: 'center',
paddingBottom: 10,
},
camera: {
flex: 1,
},
buttonContainer: {
flex: 1,
flexDirection: 'row',
backgroundColor: 'transparent',
margin: 64,
},
button: {
flex: 1,
alignSelf: 'flex-end',
alignItems: 'center',
backgroundColor: 'rgba(0,0,0,0.5)',
padding: 10,
margin: 5,
borderRadius: 5,
},
text: {
fontSize: 18,
fontWeight: 'bold',
color: 'white',
},
previewContainer: {
flex: 1,
backgroundColor: 'black',
},
preview: {
flex: 1,
resizeMode: 'contain',
},
});