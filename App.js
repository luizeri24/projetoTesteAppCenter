import React from 'react';
import {View, Text} from 'react-native';
import Analytics from 'appcenter-analytics';

const App = () => {
  Analytics.trackEvent('Daniela linda');
  return (
    <View>
      <Text>Olá mundo</Text>
      <Text>Eu amo a Daniela</Text>
    </View>
  );
};

export default App;
