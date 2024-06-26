import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Colors from '../../constants/colors'


const Card = (props) => {
  return (
    <View style={styles.card}>
      {props.children}
    </View>
  )
}

export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    // Shadow addition different in android and IOS
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})