import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  return (
    <View >
      <Image style={styles.mainImg}source={require('./images/coding.png')}/>

      <Text style={styles.welcomeTxt}>Welcome to my app!</Text>

      <View style={styles.inputFlex}>
      <Text style={styles.headingTxt}>Enter your name:</Text>
      <TextInput style={styles.inputBoxTxt}placeholder="John"/>
      <Text style={styles.headingTxt}>Enter your surname:</Text>
      <TextInput style={styles.inputBoxTxt}placeholder="Carter"/>
      </View>

      <Button title="Add User"/>
      <StatusBar style="auto" />
    </View>
  );
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

  },

  mainImg: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: 250
  },

  inputFlex:{
    flexDirection: 'row',
    marginTop:30
  }

});
