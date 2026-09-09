import { Button, Text, View, Image, ImageSourcePropType } from 'react-native';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import styles from '../components/Styles';

function ViewDetails({ navigation, route }: ViewDetailsProps){

  const NameGet = route.params?.NameSend;
  const SurnameGet = route.params?.SurnameSend;
  const [selectedValue, setSelectedValue] = useState('0');
  const [iSelected, setIntValue] = useState(0);
  // const [ ImageBlock, setImage ] = useState<ImageSourcePropType | undefined>(undefined);
  const [blockArray] = useState<ImageSourcePropType[]>([
    undefined,
    require('../images/React-Native.png'),
    require('../images/Kotlin.jpg'),
    require('../images/HTML-CSS.png'),
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

export default ViewDetails;