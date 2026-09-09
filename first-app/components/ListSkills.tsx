import { Button, Text, TextInput, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from '../components/Styles';
import { ListSkillsProps } from '../App';

function ListSkills({ navigation, route }: ListSkillsProps){
  const [Skills, setSkills] = useState<string[]>([]);
  const [txtSkill, setSkill] = useState('');

  const removeSkillHandler = (index: number) => {
    setSkills((currentSkills) => currentSkills.filter((skill, i) => i !== index));
  }

  

  const renderSkills = () => {
    const arrOutput = [];

    for (let i=0; i < Skills.length; i++){
      arrOutput.push(
        <View key={i} style={styles.inputContainer}>
          <Text style={styles.skillText}>
          {Skills[i]}
          </Text>

          {/* Assigning the deletBtn to the button (delete button) */}
          <TouchableOpacity onPress={() => removeSkillHandler(i)} style={styles.deleteBtn}>
            <Text style={styles.deleteBtnTxt}>Remove</Text>
          </TouchableOpacity>
        </View>
      )
    }
    return arrOutput;
  }
  
  return(
    // Entire app container for eveything on the page
    <View style={styles.appContainer}>
      <View>
        {/* Adding ability to scroll down the page */}
        <SafeAreaView>
          <ScrollView>
            {/* assigning BOTH mainImg and bannerImg style to our image */}
            <View style={styles.mainImg}>
              <Image style={styles.bannerImg}
                    source={require('./images/banner.jpg')}/>
            </View>
            {/* Our main heading for the image */}
            <Text style={styles.welcomeTxt}>List your Skills!</Text>

            {/* Where the users types their skills */}
            <View style={styles.inputContainer}>
              <TextInput style={styles.textInput}
                        placeholder='Enter your skills'
                        onChangeText={newText => setSkill(newText)}
              />
              <Button title='Add skill'
                onPress={() => {
                  Skills.push(txtSkill);
                  setSkill("");
                }}/>

            </View>
                <View style={styles.skillContainer}>
                  {renderSkills()}
                </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  )

};
