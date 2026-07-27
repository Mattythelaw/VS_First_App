import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image,  } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component= {Mainscreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Mainscreen(){
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');

  console.log('App works!');

  return(

    <View >
      <Image style={styles.mainImg}source={require('./images/coding.png')}/>

      <Text style={styles.welcomeTxt}>Welcome to my app!</Text>

      <View style={styles.inputFlex}>
      <Text style={styles.headingTxt}>Enter your name:</Text>

      <TextInput style={styles.inputBoxTxt}placeholder="John"
      onChangeText={newText => setName(newText)} />

      <Text style={styles.headingTxt}>Enter your surname:</Text>

      <TextInput style={styles.inputBoxTxt}placeholder="Carter"
      onChangeText={newText => setSurname(newText)}/>
      </View>

      <Button title="Add User"
        onPress={() => {
          console.log("Name: " + Name + "Surname: " + Surname) }}/>

      <StatusBar style="auto" />
    </View>

  )

}

const styles = StyleSheet.create({
  welcomeTxt: {
    paddingTop: 50,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },

  headingTxt: {
    fontWeight: 'bold',
  },

  inputBoxTxt : {
    borderBottomWidth: 1
  },

  mainImg: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: 250
  },

  inputFlex:{
    marginTop:30,
    justifyContent: 'space-evenly'
  }
});
