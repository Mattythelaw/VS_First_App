import { StatusBar } from 'expo-status-bar';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NativeStackScreenProps} from '@react-navigation/native-stack'
import { RadioButton } from 'react-native-paper'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import MainScreen from './components/MainScreen';
import ViewDetails from './components/ViewDetails';
import ListSkills from './components/ListSkills';

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

   export type TabParamList = {
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

  export type ViewDetailsProps = MaterialTopTabScreenProps<
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
        <Tab.Screen name = "Home" component= {MainScreen}/>
        <Tab.Screen name = "ViewDetails" component= {ViewDetails}/>
        <Tab.Screen name = "ListSkills" component= {ListSkills}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}






  

    
         
          
       










