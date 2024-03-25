import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, Alert, FlatList, useWindowDimensions } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { MaterialIcons } from '@expo/vector-icons'
import GuessLogItem from '../components/game/GuessLogItem';

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
  const initialGuess = generateRandomBetween(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  const { width, height } = useWindowDimensions();

  const nextGuessHandler = (direction) => {
    if ((direction == 'lower' && currentGuess < props.userNumber) || (direction == 'greater' && currentGuess > props.userNumber)) {
      Alert.alert("Don't Lie!", "You know this is wrong..", [{ text: 'Sorry!', style: 'cancel' },])
      return;
    }

    if (direction == 'lower') {
      maxBoundary = currentGuess;
    }
    else {
      minBoundary = currentGuess + 1;
    }
    const newRndnNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndnNumber)
    setGuessRounds((prevGuessRounds) => [newRndnNumber, ...prevGuessRounds]);
    console.log(minBoundary, maxBoundary)
  }

  useEffect(() => {
    if (currentGuess == props.userNumber) {
      props.onGameOver(guessRounds.length);
    }
  }, [currentGuess, props.userNumber, props.onGameOver])


  useEffect(() => {
    minBoundary = 1,
      maxBoundary = 100;
  }, [])

  const guessRoundsListLength = guessRounds.length

  let content = <>
    <NumberContainer>{currentGuess}</NumberContainer>
    <Card>
      <InstructionText instruction={"Higher Or Lower"} style={styles.instructionText} />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <MaterialIcons name='add' size={24} color={'white'} />
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <MaterialIcons name='remove' size={24} color={'white'} />
          </PrimaryButton>
        </View>
      </View>
    </Card>
  </>

  if (width > 500) {
    content = (
      <>
       
        <View style={styles.buttonContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <MaterialIcons name='add' size={24} color={'white'} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <MaterialIcons name='remove' size={24} color={'white'} />
            </PrimaryButton>
          </View>
        </View>
      </>

    )
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => <GuessLogItem guess={itemData.index} roundNumber={guessRoundsListLength - itemData.index} />}
            keyExtractor={(item) => item}
          />
        }
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
    alignItems: 'center'
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',

  },
  buttonContainer: {
    flex: 1

  },
  buttonContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
});