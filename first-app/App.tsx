import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.welcomeTxt}>
      <Text>Welcome to my app!</Text>
      <Text>Enter your name:</Text>
      <TextInput placeholder="John"/>
      <Text>Enter your surname:</Text>
      <TextInput placeholder="Carter"/>

      <Button title="Add User"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeTxt: {
    paddingTop: 40,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
});
