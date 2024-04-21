import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Define the diseases array
const diseases = [
    // Diseases data...
];

export default function InfoScreen({ navigation }) {
    // State to manage the expanded/collapsed state of each disease
    const [expanded, setExpanded] = useState({});

    // Function to toggle the expanded state of a disease
    const toggleExpanded = (index) => {
        setExpanded(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    // Function to determine the risk level based on image and disease type
    const determineRiskLevel = (image, diseaseType) => {
        // Your logic here to determine the risk level based on the image and disease type
        // For demonstration purposes, I'll just return a random risk level
        const randomRiskLevel = ['low', 'medium', 'high'][Math.floor(Math.random() * 3)];
        return randomRiskLevel;
    };

    // Function to handle adding the disease to history
    const addToHistory = (disease) => {
        const riskLevel = determineRiskLevel(image, disease.name); // Assuming 'image' is the image taken
        // Add the disease to history with its risk level
        const historyEntry = {
            name: disease.name,
            risk: riskLevel
        };
        // Store the history entry in your preferred data structure (e.g., array, object, database)
        console.log('Adding to history:', historyEntry);
    };

    // Render each disease item
    const renderItem = ({ item, index }) => {
        // Splitting the description to access "Areas Affected" and "Common Sources for Infection"
        const descriptionParts = item.description.split('Common Sources for Infection:');
        const areasAffected = descriptionParts[0];
        const commonSources = item.source ? item.source : 'N/A';

        return (
            <TouchableOpacity onPress={() => toggleExpanded(index)}>
                <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                    {expanded[index] && (
                        <View>
                            <Text style={{ marginTop: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>Areas Affected:</Text> {areasAffected}
                            </Text>
                            <Text style={{ marginTop: 5 }}>
                                <Text style={{ fontWeight: 'bold' }}>Common Sources for Infection:</Text> {commonSources}
                            </Text>
                            <Text style={{ marginTop: 5 }}>
                                <Text style={{ fontWeight: 'bold' }}>Risk Level: </Text>
                                <Text style={{ fontWeight: 'bold', color: item.risk === 'low' ? 'green' : item.risk === 'medium' ? '#b1b100' : 'red' }}>
                                    {item.risk.toUpperCase()}
                                </Text>
                            </Text>
                            <TouchableOpacity onPress={() => addToHistory(item)}>
                                <View style={{ backgroundColor: item.risk === 'low' ? 'green' : item.risk === 'medium' ? '#b1b100' : 'red', padding: 5, marginTop: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Add to History</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={diseases}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
