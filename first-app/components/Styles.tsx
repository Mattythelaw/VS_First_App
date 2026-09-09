import { StyleSheet, Text, View, TextInput, Button, Image,  SafeAreaView, ScrollView, Animated, Easing, ViewStyle, StyleProp, ImageSourcePropType, TouchableOpacity } from 'react-native';

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
    width: 500,
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
  },

  deleteBtn: {
    backgroundColor: '#d85555',
    padding: 5,
    borderRadius: 5
  },

  deleteBtnTxt: {
    color: 'white',
    fontWeight: 'bold'
  }
}
); export default styles;