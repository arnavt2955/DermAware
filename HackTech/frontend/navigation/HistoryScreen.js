import * as React from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import { prevDiseases } from './ScanScreen';

export default function HistoryScreen({ navigation }) {
    const [diseases, setDiseases] = React.useState(prevDiseases);

    useFocusEffect(
        React.useCallback(() => {
            // This will run every time the screen comes into focus
            console.log("Screen focused");
            setDiseases(prevDiseases); // Update diseases
        }, [])
    );

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Scan')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>History Screen</Text>

            {/* Conditionally render based on the length of diseases */}
            {diseases.length === 0 ? (
                <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10 }}>No previous diseases</Text>
            ) : (
                // Render each element of diseases
                diseases.map((disease, index) => (
                    <Text key={index} style={{ fontSize: 16, textAlign: 'center', marginTop: 10 }}>{disease}</Text>
                ))
            )}
        </View>
    );
}
