import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image,  SafeAreaView, ScrollView, Animated, Easing, ViewStyle, StyleProp, ImageSourcePropType} from 'react-native';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps} from '@react-navigation/native-stack'
import { RadioButton } from 'react-native-paper'

 type RootStackParamList = {
    Home: undefined;
    View: {
      NameSend: string;
      SurnameSend: string;
    };
    ListSkills: undefined;
  };

  // This sets up the "naviagtor" which controls teh switching of screens
  const Stack = createNativeStackNavigator<RootStackParamList>();

  // This describes what information gets passed in each screen
  type MainScreenProps = NativeStackScreenProps<
    RootStackParamList,
    'Home'
  >;

   type ViewDetailsProps = NativeStackScreenProps<
    RootStackParamList,
    'View'
  >;

  type ListSkillsProps = NativeStackScreenProps<
    RootStackParamList,
    'ListSkills'
  >;

// This is the first thing that gets displayed when the app opens
export default function App() {

  return (
    // Everthing that is related to navigation has to stay inside of this
    <NavigationContainer>
      <Stack.Navigator>
         {/* This tells the app that the "Home" screen is howing the Mainscreen component and the "View" screen
         is hwoing the ViewDetails component */}
        <Stack.Screen name = "Home" component= {Mainscreen}/>
        <Stack.Screen name = "View" component= {ViewDetails}/>
        <Stack.Screen name = "ListSkills" component= {ListSkills}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// This is the Home screen and the "navigation" is a remote control that allows you to navigate to 
// to the other screens
function Mainscreen({ navigation }: 
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
          navigation.navigate('View', {
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
  )

}

function ViewDetails({ navigation, route }: ViewDetailsProps){

  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;
  const [selectedValue, setSelectedValue] = useState('0');
  const [iSelected, setIntValue] = useState(0);
  // const [ ImageBlock, setImage ] = useState<ImageSourcePropType | undefined>(undefined);
  const [blockArray] = useState<ImageSourcePropType[]>([
    undefined,
    require('./img/React_Native.png'),
    require('./img/Kotlin.jpg'),
    require('./img/HTML-CSS.png'),
  ]);


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
      <View style = {{flex: 1}}>
        <Text style ={{fontWeight: "bold", flex:0, paddingTop: 30, justifyContent: "center", 
          textAlign: "center", alignItems: "center"}}>
          Generate Chosen Language Image
          </Text>
          <Button title = "Display"
            onPress={() => {
              setIntValue(Number(selectedValue));
            }}/>
          <View style = {styles.container}>
            <Image source={ blockArray[iSelected] } style ={styles.viewImage}></Image>
          </View>
      </View>
    </View>
  
  )
}

function ListSkills({ navigation, route }: ListSkillsProps){
  const [txtSkill, setSkill] = useState('');
  
  return(
    <View>

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

const Slidein = ({children, style}: FadeInViewProps) => {
  const t = useRef(new Animated.Value(40)).current;
  const o = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(t, { toValue: 0, duration: 450, easing: Easing.out(Easing.cubic), useNativeDriver: true }),

      Animated.timing(o, { toValue: 1, duration: 350, useNativeDriver: true })
    ]).start();
  }, []);  
    
  return <Animated.View style={{ transform: [{ translateY: t }], opacity: o }}>
    {children}
  </Animated.View>;
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
  },

  viewImage: {
    width: 350,
    height: 350,
    alignContent: 'center'
  },

  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  bannerImg: {
    height: 350,
    alignContent: "center"
  },
  
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa5a5'
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#e78a8a',
    width: '70%',
    margin: 7,
    padding: 5
  },

  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 15,
  },

  skillContainer: {
    flex: 5
  },

  skillText: {
    fontSize: 15,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#51b1e1'
  }


});
