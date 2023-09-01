import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>qualquer coisa</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;

