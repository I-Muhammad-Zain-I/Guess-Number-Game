import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, Alert } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

const generateRandomBetween = (min, max, exclude) => {
  const rndName = Math.floor(Math.random() * (max - min)) + min;

  if (rndName === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndName;
  }
}

let minBoundary = 1;
let maxBoundary = 100;





const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  

  const nextGuessHandler = (direction) => {
    if ((direction == 'lower' && currentGuess < props.userNumber) || (direction == 'greater' && currentGuess > props.userNumber)) {
      Alert.alert("Don't Lie!", "You know this is wrong..", [{text: 'Sorry!', style: 'cancel'},])
      return;
    }
    
    if(direction == 'lower') {
      maxBoundary = currentGuess;
    }
    else {
      minBoundary = currentGuess + 1;
    }
    const newRndnNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndnNumber)
    console.log(minBoundary, maxBoundary)
  }

  useEffect(() => {
    if(currentGuess == props.userNumber) {

    }
  })


  return (
    <View style={styles.screen}>
      <Title title={"Opponent's Guess"} />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
        </View>
      </View>
      <View>

      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: StatusBar.currentHeight ?? 0,
  },

});