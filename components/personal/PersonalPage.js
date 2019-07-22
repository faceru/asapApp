import React, {Component} from "react";
import {View, Text, Button} from 'react-native';
import Cards from './../../components/personal/cardsView';
import AsyncStorage from '@react-native-community/async-storage';
import {Data} from './../../components/Forms/LoginForm';

const rerout = props =>{
    props.navigation.navigate('Step1');
};

const PersonalPage = props =>{
    console.log(Data, 'DATA');
  return(
      <View>
          <Text style={{fontSize: 30}}>
              Personal
          </Text>
          <Cards/>
          <Button
            title={'New Visitka'}
            onPress={rerout.bind(null, props)}
          >

          </Button>
      </View>
  );
};
export default PersonalPage;