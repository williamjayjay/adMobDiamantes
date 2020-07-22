import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity, FlatList} from 'react-native'
import firebase  from '../../firebaseConnection';
import  Icon from 'react-native-vector-icons/FontAwesome';
// import  Icon2 from 'react-native-vector-icons/Feather';

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
              // // nomeAb: childItem.val().nomeAb,
              preco: childItem.val().preco,
              // cartaz: childItem.val().cartaz,
    
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
            
          // horizontal={true}
          data={this.state.lista}
          renderItem={({item})=>

           
          <TouchableOpacity style={styles.botao} onPress={() => {
            
            Alert.alert(
              "Código possivel",
              `O código deste diamante é: ${item.valor} `,
              [
                { text: "OK", onPress: () => {} }
              ],
              { cancelable: false }
              );
              
            }}  >
                    
                   
                    {/* <Icon2 name="package" size={28} color={'#fff'} /> */}
              <Text style={styles.key} > <Icon name="diamond" size={30} color={'#40e0d0'}   /> {item.key} </Text>

            </TouchableOpacity>

           
          
          }
          // keyExtractor = {(item, index)=>index.toString()}   
/>

  </View>

       

    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
      // flex: 1,
      // padding: 2,
      // alignItems:'center',
      
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
    margin:15,
    borderRadius:5,
    borderWidth:2,
    // alignItems:'center',
    justifyContent:'center',
    padding:5
   
  },
  dima:{
    // flexDirection:'column',
    // margin:15
  },
  key:{
    fontSize:25,
    color:'#fafafa'
  },

})

export default Main