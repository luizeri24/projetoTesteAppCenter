import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Analytics from 'appcenter-analytics';

Analytics.trackEvent('Daniela LINDA');
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá mundo</Text>
      <Text>Eu amo a Daniela123</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text: {
    fontSize: 20,
  },
});
export default App;
