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
