import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function QuickLogScreen({ navigation }) {
    const [selectedOption, setSelectedOption] = React.useState(null);

    const options = [
        { label: 'Entries from Current to a Week Back', value: 'currentToWeekBack' },
        { label: 'Important Entries', value: 'importantEntries' },
        { label: 'Custom Entries', value: 'customEntries' },
    ];

    const handleGenerateLog = () => {
        // Logic to generate the log based on the selected option
        // For demonstration purposes, just log the selected option
        console.log("Generating log for:", selectedOption);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>QuickLog Screen</Text>
            
            {/* Dropdown for selecting options */}
            <View style={{ width: 300, marginBottom: 20 }}>
                <Text style={{ marginBottom: 10 }}>Select an option:</Text>
                <DropDownPicker
                    items={options.map(option => ({ label: option.label, value: option.value }))}
                    defaultValue={selectedOption}
                    containerStyle={{ height: 40 }}
                    style={{ backgroundColor: '#fafafa' }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={item => setSelectedOption(item.value)}
                />
            </View>

            {/* Generate Log Button */}
            <TouchableOpacity onPress={handleGenerateLog} style={{ backgroundColor: 'blue', padding: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Generate Log</Text>
            </TouchableOpacity>
        </View>
    );
}
