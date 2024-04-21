import * as React from 'react';
import { View, Text } from 'react-native';

export default function InfoScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Scan')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Info Screen</Text>
        </View>
    );
}