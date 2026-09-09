import { Button, Text, TextInput, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../components/Styles';
import FadeInView from './FadeinView';
import { MainScreenProps } from '../App';

function isEmpty(value: any){
  return(
    (value === null) ||

    (value.hasOwnProperty('length') && value.length === 0) ||

    (value.constructor === Object && Object.keys(value).length === 0)
  );
}
// This is the Home screen and the "navigation" is a remote control that allows you to navigate to 
// to the other screens
function MainScreen({ navigation }: 
  MainScreenProps){

  // useState is how the component will remember something
  // Name is the current value and setName is the way to change it
  // Note for self: Always use setName and never change Name directly
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Error, setError] = useState(false);

  //Sends a message to the terminal to let you let you know if the app works
  console.log('App works!');

  // A normal function that makes the first letter capital
  const capitalize = (text: string) => {
    if (text.length === 0) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  

  return(

    <View >
      {/* Lets you scroll if needed */}
      <SafeAreaView>
        <ScrollView>
      {/* "require()"  will grab a picture from my project folder */}    
      <Image style={styles.mainImg}
      source={require('./images/coding.png')}/>

      <Text style={styles.welcomeTxt}>Welcome to my app!</Text>
      
    <FadeInView>

      {/* If the error is true it display in red, if not then nothing */}
      <Text style={Error? styles.redTxt : styles.blank}>
        {Error? "Please enter your info": ""}
      </Text>

      <View style={styles.inputFlex}>
      <Text style={styles.headingTxt}>Enter your name:</Text>

      {/* This bos shows whatever "Name" is currently in and everytime 
      a letter is typed it capitalizes and saves it */}
      <TextInput style={styles.inputBoxTxt}placeholder="John"
      value={Name}
      onChangeText={newText => setName(capitalize(newText))} 
      autoCapitalize="words"/>

      <Text style={styles.headingTxt}>Enter your surname:</Text>

      <TextInput style={styles.inputBoxTxt}
      placeholder="Carter"
      value={Surname}
      onChangeText={newText => setSurname(capitalize(newText))}
      autoCapitalize="words"/>
      </View>
    </FadeInView>

      <Button title="Add User"
        onPress={() => {

        // Can only proceed if both the boxes have something typed in
        if ((isEmpty(Name)==false) && (isEmpty(Surname)==false)){

          // Proceed to the "View" screen and with the name and surname
          navigation.navigate('ViewDetails', {
            NameSend : Name,
            SurnameSend : Surname
          });
          setError(false);
        }
        else{
          // makes the "please fill this in" text show
          setError(true);
        }
        
        }}/>
      <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
      
    </View>
  );

};

export default MainScreen;