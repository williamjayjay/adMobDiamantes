import React  from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native'

import Main from './pages/Main'
import Ads from './pages/Ads'
import Header from './pages/Header'
console.disableYellowBox = true;


const App = () => {

  return(
    <View style={styles.container} >
      <Header />
      

    <Main/>

    <Ads/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      // padding: 2,
      alignItems:'center',
      // paddingBottom:180,
      backgroundColor:'#f2f2f2'
      
  },
  label: {
      fontSize: 22,
      fontWeight:'bold',
      // padding:5
  },
  botao: {
    width:100,
    height:55,
    backgroundColor:'red',
    margin:10
  },
  dima:{
    flexDirection:'row',
    margin:15
  }
})

export default App