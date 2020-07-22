import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity, FlatList} from 'react-native'

import firebase from '../../../services/firebaseConnection'
import  Icon from 'react-native-vector-icons/FontAwesome';

import {
  AdMobInterstitial
} from 'react-native-admob';

class Main extends Component{

    constructor(props){
        super(props)
        this.state={
          lista:[],
        };
    
        firebase.database().ref('diamantes').on('value', (snapshot) => {
          let state = this.state
          state.lista = []
    
          snapshot.forEach((childItem)=>{
            state.lista.push({
              key: childItem.key,
              valor: childItem.val().valor,
              
              preco: childItem.val().preco,
              
    
            })
    
          } )
    
          this.setState(state)
      } );
    
      }


render(){
  return(
    <View style={styles.container} >

      <View style={styles.dima} > 

      <FlatList 
            showsVerticalScrollIndicator={false} 
        
          data={this.state.lista}
          renderItem={({item})=>

           
          <TouchableOpacity style={styles.botao} onPress={ () =>
            
           { 
       
            
            AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
            AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd()) 
            +
            Alert.alert(
            "Código possivel",
            `O código deste diamante é: ${item.valor} `,
            [
              { text: "OK", onPress: () => {console.log('ok')} }
            ],
            { cancelable: false }
            ) 
            

            
          }
            
            }  >
                    
                   
              
              <Text style={styles.key} > <Icon name="diamond" size={30} color={'#40e0d0'}   /> {item.key} </Text>

            </TouchableOpacity>

           
          
          }
        
/>

  </View>

       

    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
      flex: 4
      
      
      
  },
  label: {
      fontSize: 25,
      fontWeight:'bold',
      padding:25
  },
  botao: {
    width:300,
    height:60,
    backgroundColor:'#1b2d4e',
    margin:10,
    borderRadius:5,
    borderWidth:2,
  
    justifyContent:'center',
    padding:5
   
  },
 
  key:{
    fontSize:25,
    color:'#fafafa'
  },

})

export default Main