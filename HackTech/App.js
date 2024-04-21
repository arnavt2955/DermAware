import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <View style={styles.navbar}>
          {/* Navigation bar content */}
          <TouchableOpacity onPress={() => navigation.navigate('History')}>
            <Text style={styles.navText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Steps')}>
            <Text style={styles.navText}>Steps</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
            <Text style={styles.navText}>Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <Text style={styles.navText}>Info</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('QuickLog')}>
            <Text style={styles.navText}>Quick Log</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ccc', // Example background color
    height: 50, // Example height
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Example text color
  },
});
