import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import RegistrForm from './../components/Forms/RegistrateForm';
import LoginForm from './../components/Forms/LoginForm';
import PersonalPage from './personal/PersonalPage'
import GenerateStep1 from "./generate/GenerateStep1";
const AppNavigator = createStackNavigator({
   Login: LoginForm,
   Registrate: RegistrForm,
   Personal1: PersonalPage,
   Step1: GenerateStep1,
},
    {
        headerMode: 'none',
        initialRouteName: 'Login',
    });
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

