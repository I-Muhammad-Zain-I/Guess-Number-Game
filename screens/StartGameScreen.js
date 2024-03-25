import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const { width, height } = useWindowDimensions();

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText)
  }

  const resetInputHandler = () => {
    setEnteredNumber('');
  }

  const confirmInputHandler = () => {
    const choseNumber = parseInt(enteredNumber);

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be in range 1 and 99 inclusive",
        [{ text: 'Okay', style: 'default', onPress: resetInputHandler }]
      )

      return;
    }
    props.onPickedNumber(choseNumber);
  }

  const marginTopDistance = height < 400 ? 36 : 100

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText instruction="Enter Number" />
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType={"number-pad"}
              autoCapitalize='none'
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler}

            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton
                  onPress={resetInputHandler}
                >
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton
                  onPress={confirmInputHandler}
                >
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    //marginTop: deviceHeight < 400 ? 36 : 100,
    alignItems: 'center'
  },


  numberInput: {
    height: 50,
    width: 50,
    marginBottom: 16,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',

  },
  buttonContainer: {
    flex: 1

  }

})