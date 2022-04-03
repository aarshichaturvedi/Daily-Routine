import { Text, View,TouchableOpacity,StyleSheet,ImageBackground,Image } from 'react-native'
import React, { Component } from 'react'
import { RFValue } from "react-native-responsive-fontsize";
export class Login extends Component {
  render() {
    return (
      <ImageBackground source = {require('../assets/BgImage.png')} style = {{ height : 600,}}>
      <View>
       

        
      <TouchableOpacity
              style={styles.button}
           
            >
              <Image
                source={require("../assets/Google_icon.png")}
                style={styles.googleIcon}
              ></Image>
              <Text style={styles.googleText}>Sign in with Google</Text>
            </TouchableOpacity>
            
      </View>
      </ImageBackground>
    )
  }
}

export default Login

const styles = StyleSheet.create({

button: {
width : 50,
top : 300,
left : 500,
width : 380,
padding: 10,
alignItems : 'center',
backgroundColor : '#CCFF00',

},
googleIcon:{
 width : 15,
 height : 15,
 
},




})