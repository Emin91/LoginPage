import {StyleSheet, Dimensions} from 'react-native'

const {width: WIDTH} = Dimensions.get('window')

export const styles = StyleSheet.create({
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
  
 export default styles;  