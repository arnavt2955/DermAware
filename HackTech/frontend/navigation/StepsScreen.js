import * as React from 'react';
import { View, Text } from 'react-native';

export default function StepsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Scan')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Steps Screen</Text>
        </View>
    );
}
