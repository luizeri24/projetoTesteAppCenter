import React from 'react';
import {View, Text} from 'react-native';
import Analytics from 'appcenter-analytics';

const App = () => {
  Analytics.trackEvent('Alouuuuuuuuuuuuuuuuuuuuuuuu');
  return (
    <View>
      <Text>Olá mundo</Text>
      <Text>Eu amo a Daniela123</Text>
    </View>
  );
};

export default App;
