import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
import Colors from '../../constants/colors'
const Title = (props) => {
  return (
    <Text style={styles.title}>{props.children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.select({ios: 0, android: 2}),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300
  }
})