import React from 'react'
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import  Colors  from '../../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  )
}

export default NumberContainer

// On IOS screen == window, 
// On Android screen is entire space including statusbar
// window is space excluding statusbar
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 36 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    
  }
})