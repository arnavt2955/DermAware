import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faSearch, faInfo, faBook } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('History')}>
        <FontAwesomeIcon icon={faHistory} style={styles.icon} />
        <Text style={styles.navText}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Scan')}>
        <FontAwesomeIcon icon={faSearch} style={styles.icon} />
        <Text style={styles.navText}>Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Info')}>
        <FontAwesomeIcon icon={faInfo} style={styles.icon} />
        <Text style={styles.navText}>Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigateToScreen('Log')}>
        <FontAwesomeIcon icon={faBook} style={styles.icon} />
        <Text style={styles.navText}>Quick Log</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
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
  icon: {
    marginRight: 5,
    color: '#fff',
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default NavBar;
