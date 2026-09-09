import { StatusBar } from 'expo-status-bar';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NativeStackScreenProps} from '@react-navigation/native-stack'
import { RadioButton } from 'react-native-paper'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';

//  type RootStackParamList = {
//     Home: undefined;
//     View: {
//       NameSend: string;
//       SurnameSend: string;
//     };
//     ListSkills: undefined;
//   };

//   // This sets up the "naviagtor" which controls teh switching of screens
//   const Stack = createNativeStackNavigator<RootStackParamList>();

//   // This describes what information gets passed in each screen
//   type MainScreenProps = NativeStackScreenProps<
//     RootStackParamList,
//     'Home'
//   >;

//    type ViewDetailsProps = NativeStackScreenProps<
//     RootStackParamList,
//     'View'
//   >;

//   type ListSkillsProps = NativeStackScreenProps<
//     RootStackParamList,
//     'ListSkills'
//   >;

   type TabParamList = {
    Home: undefined;

    ViewDetails: {
      NameSend: string;
      SurnameSend: string;
    };

    ListSkills: undefined;
  };
  const Tab = createMaterialTopTabNavigator<TabParamList>();
  export type MainScreenProps = MaterialTopTabScreenProps<
    TabParamList,
    'Home'
  >;
  export type ListSkillsProps = MaterialTopTabScreenProps<
    TabParamList,
    'ListSkills'
  >;

  type ViewDetailsProps = MaterialTopTabScreenProps<
    TabParamList,
    'ViewDetails'
  >;
  

// This is the first thing that gets displayed when the app opens
export default function App() {

  return (
    // Everthing that is related to navigation has to stay inside of this
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarStyle: { marginTop: 30,},}}>
         {/* This tells the app that the "Home" screen is howing the Mainscreen component and the "View" screen
         is hwoing the ViewDetails component */}
        <Tab.Screen name = "Home" component= {Mainscreen}/>
        <Tab.Screen name = "ViewDetails" component= {ViewDetails}/>
        <Tab.Screen name = "ListSkills" component= {ListSkills}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



function ViewDetails({ navigation, route }: ViewDetailsProps){

  const NameGet = route.params?.NameSend;
  const SurnameGet = route.params?.SurnameSend;
  const [selectedValue, setSelectedValue] = useState('0');
  const [iSelected, setIntValue] = useState(0);
  // const [ ImageBlock, setImage ] = useState<ImageSourcePropType | undefined>(undefined);
  const [blockArray] = useState<ImageSourcePropType[]>([
    undefined,
    require('./images/React-Native.png'),
    require('./images/Kotlin.jpg'),
    require('./images/HTML-CSS.png'),
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










