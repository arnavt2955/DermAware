import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import {shareAsync } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import axios from 'axios'; // No need for require, use import


export default function ScanScreen({navigation}) {
  const [output, setOutput] = useState("Not ready");
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [hr, setHr] = useState(null);
	const [hrv, setHrv] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back); // Initially set to front camera
  const [photo, setPhoto] = useState();
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();


  }, []);

	const flipCamera = () => {
		setCameraType(
			cameraType === Camera.Constants.Type.back
				? Camera.Constants.Type.front
				: Camera.Constants.Type.back
		);
	};
  const handleDoubleTap = () => {
		flipCamera();
	};
  useEffect(() => {
    console.log("IOEHIOFHIS")
    fetch("http://localhost:5000/bite").then(
      res => res.json()
    ).then(
      data => {
        console.log("bro");
        setOutput(data.data[0]);
        console.log(data);
      }
    )
  }, []);
  if (hasCameraPermission === undefined) {
    return <Text>Requesting Permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for Camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

const sendPhotoToBackend = async (photoUri) => {
  const requestOptions = {
      method: 'POST',
      body: photoUri,
      headers: {
          'Content-Type': 'multipart/form-data',
      },
  };

  try {
      const response = await fetch('http://localhost:5000/upload', requestOptions);
      if (response.ok) {
          console.log('Photo uploaded successfully');
          const responseData = await response.json();
          console.log(responseData);
      } else {
          console.error('Failed to upload photo:', response.status);
      }
  } catch (error) {
      console.error('Error uploading photo:', error);
  }
};


  if (photo) {
    //uploadImageToFirebase(photo.uri);
    sendPhotoToBackend(photo.uri);
    console.log(photo);
    /*let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source = {{uri: "data:image/jpg;base64" + photo.base64}} />
        {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> :  undefined}
      </SafeAreaView>
    );*/
  }

  

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.cam} onPress={handleDoubleTap} type={cameraType}>
        <View style={styles.buttonContainer}>
          <Button title="Take Picture" onPress={takePic} />
        </View>
      </Camera>
      <Text>Disease Type:</Text>
      <Text>{output}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: 'black',
    color: 'white',
    alignSelf: 'flex-end',
  },
  cam: {
    flex:0.4,
    width: '50%',

  },
  /*cameraContainer: {
		flex: 1,
		width: '100%',
		height: '100%',
		overflow: 'hidden',
	},*/
  preview: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  }
});
