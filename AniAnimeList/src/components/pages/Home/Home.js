import React from 'react';
import {View,Text, TouchableOpacity } from 'react-native';

const HomeScreen  =(navigation) =>{
    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress ={() => navigation.navigate('Hometwo')}>
              <Text> Go To Diff Page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;