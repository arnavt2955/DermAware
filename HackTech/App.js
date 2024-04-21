import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, createNavigationContainerRef, useNavigation } from '@react-navigation/native';
import MainContainer from './frontend/MainContainer';

export default function App() {

  return (
    <MainContainer/>
  );
}

function NavBar() {
  const naviRef = createNavigationContainerRef();
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    
    if (naviRef.isReady()) {
      console.log("here");
      navigation.navigate(screenName);
    }
    
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem} onPress={() => {navigateToScreen('HistoryPage')}}>
        <Text style={styles.navText}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('StepsPage')}>
        <Text style={styles.navText}>Steps</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('ScanPage')}>
        <Text style={styles.navText}>Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('InfoPage')}>
        <Text style={styles.navText}>Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('QuickLogPage')}>
        <Text style={styles.navText}>Quick Log</Text>
      </TouchableOpacity>
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
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#b27e30',
    paddingVertical: 10,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
});
