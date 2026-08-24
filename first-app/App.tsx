import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image,  SafeAreaView, ScrollView, Animated, Easing, ViewStyle, StyleProp} from 'react-native';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps} from '@react-navigation/native-stack'
import { RadioButton } from 'react-native-paper'

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
  const [Error, setError] = useState(false);

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
      <Text style={Error? styles.redTxt : styles.blank}>{Error? "Please enter your info": ""}</Text>
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

        if ((isEmpty(Name)==false) && (isEmpty(Surname)==false)){

          navigation.navigate('View', {
            NameSend : Name,
            SurnameSend : Surname
          });
          setError(false);
        }
        else{
          setError(true);
        }
        
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
  const [selectedValue, setSelectedValue] = useState('0');

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ fontWeight: 'bold', fontSize: 25}}> Welcome {NameGet} {SurnameGet}</Text>
      <Text>Please choose a language:</Text>
    </View>

    <View style={styles.radioContainer}>
      <View style={styles.radioGroup}>
        <View style={styles.radioButton}>
          <RadioButton.Android
            value="1"
            status={selectedValue == "1" ? 'checked' : 'unchecked'}

            onPress={() => setSelectedValue('1')}

            color= "#ff0080"
          />
          <Text style={styles.radioLabel}>React Native</Text>
          
        </View>
         <View style={styles.radioButton}>
          <RadioButton.Android
            value="1"
            status={selectedValue == "2" ? 'checked' : 'unchecked'}

            onPress={() => setSelectedValue('2')}

            color= "#ff0080"
          />
          <Text style={styles.radioLabel}>Kotlin</Text>
          
        </View>
       <View style={styles.radioButton}>
          <RadioButton.Android
            value="1"
            status={selectedValue == "3" ? 'checked' : 'unchecked'}

            onPress={() => setSelectedValue('3')}

            color= "#ff0080"
          />
          <Text style={styles.radioLabel}>HTML-CSS</Text>
          </View>
        </View>
      </View>
    </View>
  
  )
}

function isEmpty(value: any){
  return(
    (value === null) ||

    (value.hasOwnProperty('length') && value.length === 0) ||

    (value.constructor === Object && Object.keys(value).length === 0)
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
interface SlideinProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
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
  },

  redTxt: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },

  blank: {
    fontSize: 0
  },

  radioContainer: {
    flex: 0,
    backgroundColor: '#ffb3e6',
    justifyContent: 'center',
    alignItems: 'center'
  },

  radioButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  radioLabel: {
    marginLeft: 5,
    fontSize: 15,
    color: '#000000'
  },

  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 15,
    elevation: 5,
    shadowColor: '#3d3d5c',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  }
});
