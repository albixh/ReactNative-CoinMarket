import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Coin Market</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default Header;