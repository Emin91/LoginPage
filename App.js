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
  TouchableOpacity,
} from 'react-native'

const {width: WIDTH} = Dimensions.get('window')

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      showPass: true,
      press: true
    }
  }
  
  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true})
    } else {
      this.setState({ showPass: true, press: false})
    }
  }
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundView}>
          <View style={styles.logoView}> 
              <Image source={logo} style={styles.logo}/>
              <Text style={styles.logoText}>LOGIN PAGE</Text>
          </View>
          <View style={styles.inputView}>
             <Image style={styles.inputIcon}
                source={require('./images/avatar.png')}/>
              <TextInput
                  style={styles.input}
                    placeholder={'Login'}
                    selectionColor={'#00d8ff'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
                    underlineColorAndroid='transparent'        
                />
          </View>
          <View style={styles.inputView}>
              <Image style={styles.inputIcon}
                source={require('./images/key.png')}/>
              <TextInput
                  style={styles.input}
                    placeholder={'Password'}
                    selectionColor={'#00d8ff'}
                    secureTextEntry={this.state.showPass}
                    placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
                    underlineColorAndroid='transparent'/>
              <TouchableOpacity style={styles.btnShowPass}
                   onPress={this.showPass.bind(this)}>
                 <Image
                    style={styles.btnShowPassIcon}
                    source={this.state.press == false ? require('./images/eye-closed.png') : require('./images/eye.png')}/>
             </TouchableOpacity>
          </View>
          <TouchableOpacity 
              style={styles.btnLogin}>
              <Text style={styles.btnLoginText}>Login</Text>
          </TouchableOpacity>
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
    paddingLeft: 65,
    opacity: 0.6,
    color: '#00d8ff', 
    backgroundColor: '#424242',
    borderColor: '#0d0d0d',
    borderWidth: 3,
  },
  inputIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 10,
    left: 20,
  },
  btnShowPass: {
    position: 'absolute',
    top: 12,
    right: 20,
  },
  btnShowPassIcon: {
    width: 30,
    height: 30,
  },
  btnLogin: {
    width: WIDTH - 30,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#00d8ff',
    justifyContent: 'center',
    marginTop: 50,
    borderColor: '#02b4d4',
    borderWidth: 3,
  },

  btnLoginText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
});

