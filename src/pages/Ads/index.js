import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    AdMobBanner,
  } from 'react-native-admob';

 

const Ads  = () => {
    return(
        <View >
   

                    <AdMobBanner
              adSize="banner"
              adUnitID="ca-app-pub-3940256099942544/6300978111"
              onAdFailedToLoad={(error) => alert(error)}
             
            />
        </View>
    )
}

const styles = StyleSheet.create({

    label: {
        fontSize: 20
    }
})

export default Ads