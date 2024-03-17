import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
const Title = (props) => {
  return (
    <Text style={styles.title}>{props.title}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  }
})