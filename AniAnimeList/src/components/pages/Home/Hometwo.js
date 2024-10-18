import React from 'react';
import {View,Text, TouchableOpacity } from 'react-native';

const HomeTwoScreen  =(navigation) =>{
    return (
        <View>
            <Text>Home Two Screen</Text>
            <TouchableOpacity onPress ={() => navigation.navigate('Hometwo')}>
              <Text> Go To Diff Page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeTwoScreen;