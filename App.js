import React, { Component } from 'react'
import backgroundImage from './images/background2.jpg'
import logo from './images/reactlogo.png'
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Dimensions,
} from 'react-native'

const {width: WIDTH} = Dimensions.get('window')

export default class App extends Component {

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundView}>
          <View style={styles.logoView}> 
              <Image source={logo} style={styles.logo}/>
              <Text style={styles.logoText}>LOGIN PAGE</Text>
          </View>
          <View>
              <TextInput
                  style={styles.input}
                    placeholder={'Login'}
                    placeholderTextColor={'white'}
                    underlineColorAndroid='transparent'        
                />
          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: '#051235',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoText: {
    color: 'white',
    fontSize: 35,
    opacity: 0.6,
    fontWeight: '500',
    
  },
  input: {
    width: WIDTH - 30,
    height: 55,
    borderRadius: 35,
    fontSize: 30,
    paddingLeft: 50,
    padding: 10,
    backgroundColor: '#141414',
    opacity: 0.5,
    color: 'white',
  },
});

