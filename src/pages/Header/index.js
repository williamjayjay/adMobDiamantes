import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity, Image,Dimensions} from 'react-native'
// ..
import firebase from '../../../services/firebaseConnection'
import  Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const lateral = Dimensions.get('window').width;
class Header extends Component{

    constructor(props){
        super(props)
        this.state={
          link:'',
          info:''

        };
    
        firebase.database().ref('module').on('value', (snapshot) => {
          let state = this.state

          state.link =  snapshot.val().link
          state.info =  snapshot.val().info
    
          this.setState(state)
      } );
    
      }

render(){
  return(
    <View style={styles.container} >
  <Image  style={{width:lateral, height:100, resizeMode:"cover" }} source={{uri:this.state.link }} />

<View style={{flexDirection:'row'}} >
  <Text style={styles.label} >SORTEIO DE DIAMANTES</Text>
  
  <TouchableOpacity style={{paddingLeft:15, justifyContent:'space-between'}}  onPress={ () => 
             Alert.alert(
              "Informações:",
              `${this.state.info}`,
              [
                { text: "OK", onPress: () => {} }
              ],
              { cancelable: false }
              )
  } >  
    <Icon name="information-outline"   size={30} color={'#005'}   />  
    </TouchableOpacity>   

</View>
  

       

    </View>
  )
}
}

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    fontWeight:'bold',
    // padding:5
},container:{
  alignItems:'center',
  justifyContent:'center'
}

})

export default Header