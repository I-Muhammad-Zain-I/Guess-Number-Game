import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../../constants/colors'

const InstructionText = (props) => {
  return (
    <Text style={[styles.instructionText, props.style]}>{props.instruction}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
    fontSize: 24,
  },
})