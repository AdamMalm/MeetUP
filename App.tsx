import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Event from './app/components/Event'

export default function App() {
  return (
    <NavigationContainer >{
        <View style={styles.container}>
          <Event />
          <StatusBar style="auto" />
        </View>
      }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
