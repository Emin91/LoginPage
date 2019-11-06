import React, { Component } from 'react'
import backgroundImage from './images/background2.jpg'
import logo from './images/reactlogo.png'
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import {styles} from './styles'



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
