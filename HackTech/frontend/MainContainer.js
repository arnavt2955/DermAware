import * as React from 'react'
import { View , Text} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

//Screens
import ScanScreen from './navigation/ScanScreen'
import HistoryScreen from './navigation/HistoryScreen'

import InfoScreen from './navigation/InfoScreen'
import QuickLogScreen from './navigation/QuickLogScreen'
import StepsScreen from './navigation/StepsScreen'

// screen names
const scanName = 'Scan'
const historyName = 'History'
const infoName= 'Info'
const quicklogName = 'QuickLog'
const stepsName = 'Steps'

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName = {scanName}
                screenOptions={({route})=> ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === scanName) {
                            iconName = focused ? 'scan': 'scan-outline';
                        } else if (rn === historyName) {
                            iconName = focused ? 'book': 'book-outline';
                        } else if (rn === infoName) {
                            iconName = focused ? 'information-circle': 'information-circle-outline';
                        } else if (rn === quicklogName) {
                            iconName = focused ? 'list': 'list-outline';
                        } else if (rn === stepsName){
                            iconName = focused ? 'footsteps': 'footsteps-outline';
                        } 
                        return <Ionicons name = {iconName} size={size} color = {color}/>
                    },
                })}>

                <Tab.Screen name = {scanName} component = {ScanScreen}/>
                <Tab.Screen name = {historyName} component = {HistoryScreen}/>
                <Tab.Screen name = {infoName} component = {InfoScreen}/>
                <Tab.Screen name = {quicklogName} component = {QuickLogScreen}/>
                <Tab.Screen name = {stepsName} component = {StepsScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}