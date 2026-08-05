import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image,  SafeAreaView, ScrollView, Animated, ViewStyle, StyleProp} from 'react-native';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps} from '@react-navigation/native-stack'

 type RootStackParamList = {
    Home: undefined,
    View: {
      NameSend: string;
      SurnameSend: string;
    };
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();

  type MainScreenProps = NativeStackScreenProps<
    RootStackParamList,
    'Home'
  >;

   type ViewDetailsProps = NativeStackScreenProps<
    RootStackParamList,
    'View'
  >;

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component= {Mainscreen}/>
        <Stack.Screen name = "View" component= {ViewDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Mainscreen({ navigation }: 
  MainScreenProps){

  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');

  console.log('App works!');
  
  const capitalize = (text: string) => {
    if (text.length === 0) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  

  return(

    <View >
      <SafeAreaView>
        <ScrollView>
      <Image style={styles.mainImg}
      source={require('./images/coding.png')}/>

      <Text style={styles.welcomeTxt}>Welcome to my app!</Text>
      
    <FadeInView>
      <View style={styles.inputFlex}>
      <Text style={styles.headingTxt}>Enter your name:</Text>

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
          navigation.navigate('View', {
            NameSend : Name,
            SurnameSend : Surname
          });
        }}/>
      <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
      
    </View>
  )

}

function ViewDetails({ navigation, route }: ViewDetailsProps){

  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Name: {NameGet} Surname: {SurnameGet}</Text>
    </View>
  )
}

interface FadeInViewProps{
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const FadeInView = ({children, style}: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current


useEffect(() => {
  Animated.timing(
    fadeAnim,
    {
      toValue: 1,
      duration: 4000,
      useNativeDriver: false
    }
  ).start();
}, [fadeAnim])

return(
  <Animated.View style = {{
    ...(style as object),
    opacity: fadeAnim
  }}>
    {children}
  </Animated.View>
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
