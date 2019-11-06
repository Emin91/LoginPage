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
          <View style={styles.inputView}>
              <TextInput
                  style={styles.input}
                    placeholder={'Login'}
                    selectionColor={'#00d8ff'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
                    underlineColorAndroid='transparent'        
                />
          </View>
          <View style={styles.inputView}>
              <TextInput
                  style={styles.input}
                    placeholder={'Password'}
                    selectionColor={'#00d8ff'}
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
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
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoText: {
    color: '#00d8ff',
    fontSize: 20,
    opacity: 0.8,
    fontWeight: '800',
  },
  inputView: {
    marginTop: 10,
  },

  input: {
    width: WIDTH - 30,
    height: 55,
    borderRadius: 35,
    fontSize: 25,
    fontWeight: '100',
    paddingLeft: 50,
    padding: 10,
    opacity: 0.6,
    color: '#00d8ff', 
    backgroundColor: '#424242',
    borderColor: '#0d0d0d',
    borderWidth: 3,
  },
});

