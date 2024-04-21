import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

export default function QuickLogScreen({ navigation }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleGenerateLog = () => {
        if (!selectedOption) {
            Alert.alert("Please select an option.");
            return;
        }

        // Logic to generate the log based on the selected option
        // For demonstration purposes, just log the selected option
        console.log("Generating log for:", selectedOption);

        // Generate dummy log file based on the selected option
        generateDummyLogFile(selectedOption);
    };

    const generateDummyLogFile = (option) => {
        // Dummy log content based on the selected option
        let dummyLogContent;
        switch (option) {
            case 'currentToWeekBack':
                dummyLogContent = 'Dummy log content for Entries from Current to a Week Back';
                break;
            case 'importantEntries':
                dummyLogContent = 'Dummy log content for Important Entries';
                break;
            case 'customEntries':
                dummyLogContent = 'Dummy log content for Custom Entries';
                break;
            default:
                dummyLogContent = '';
        }

        // Create a dummy text file
        const dummyFileName = 'dummy_log.txt';
        const dummyFileContent = dummyLogContent;
        const dummyFileBlob = new Blob([dummyFileContent], { type: 'text/plain' });
        const dummyFileUrl = URL.createObjectURL(dummyFileBlob);

        // Create a download link for the dummy file
        const downloadLink = document.createElement('a');
        downloadLink.href = dummyFileUrl;
        downloadLink.download = dummyFileName;
        downloadLink.click();
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>QuickLog Screen</Text>

            <Text style={{ marginBottom: 10 }}>Select an option:</Text>
            
            {/* Option 1: Entries from Current to a Week Back */}
            <TouchableOpacity 
                onPress={() => setSelectedOption('currentToWeekBack')} 
                style={{ 
                    backgroundColor: selectedOption === 'currentToWeekBack' ? 'lightblue' : '#fafafa', 
                    padding: 10, 
                    marginBottom: 10 
                }}
            >
                <Text>Entries from Current to a Week Back</Text>
            </TouchableOpacity>

            {/* Option 2: Important Entries */}
            <TouchableOpacity 
                onPress={() => setSelectedOption('importantEntries')} 
                style={{ 
                    backgroundColor: selectedOption === 'importantEntries' ? 'lightblue' : '#fafafa', 
                    padding: 10, 
                    marginBottom: 10 
                }}
            >
                <Text>Important Entries</Text>
            </TouchableOpacity>

            {/* Option 3: Custom Entries */}
            <TouchableOpacity 
                onPress={() => setSelectedOption('customEntries')} 
                style={{ 
                    backgroundColor: selectedOption === 'customEntries' ? 'lightblue' : '#fafafa', 
                    padding: 10, 
                    marginBottom: 10 
                }}
            >
                <Text>Custom Entries</Text>
            </TouchableOpacity>

            {/* Generate Log Button */}
            <TouchableOpacity onPress={handleGenerateLog} style={{ backgroundColor: 'blue', padding: 10, marginTop: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Generate Log</Text>
            </TouchableOpacity>
        </View>
    );
}
