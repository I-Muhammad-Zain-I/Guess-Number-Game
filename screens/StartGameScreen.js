import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState('');

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

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText instruction = "Enter Number" />
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
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
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