import { Button, Text, TextInput, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { useState }  from 'react';
import styles from '../components/Styles';
import FadeInView from './FadeinView';

function isEmpty(value: any){
  return(
    (value === null) ||

    (value.hasOwnProperty('length') && value.length === 0) ||

    (value.constructor === Object && Object.keys(value).length === 0)
  )
};
export default MainScreen;