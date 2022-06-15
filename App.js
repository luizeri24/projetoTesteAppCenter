import React from 'react';
import {View, Text} from 'react-native';
import Analytics from 'appcenter-analytics';

const App = () => {
  Analytics.trackEvent('Acesso a tela home');
  return (
    <View>
      <Text>Olá mundo</Text>
    </View>
  );
};

export default App;
