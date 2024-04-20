import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios'; // No need for require, use import

export default function App() {
  const [output, setOutput] = useState("Not ready");

  useEffect(() => {
    console.log("IOEHIOFHIS")
    fetch("http://localhost:5000/").then(
      res => res.json()
    ).then(
      data => {
        console.log("bro");
        setOutput(data.data[0]);
        console.log(data);
      }
    )
  }, []);

  return (
    <View style={styles.container}>
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
});
