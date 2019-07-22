import React, {Component} from 'react';
import {View} from 'react-native';
import {reduxForm, Field} from "redux-form";
import {CustomButton, CustomInput} from "./FormElements";
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import store from "./../../components/store";

export let Data = {};
const storeSetData = async(key, value) =>{
    return await AsyncStorage.setItem(key, value);
};
const storeGetData = async(key) =>{
    return await AsyncStorage.getItem(key);
};
const auth = (props)=>{
    storeGetData('token').then((token)=>{
        if(token){
            axios({
                method: 'GET',
                url:'https://afternoon-gorge-17681.herokuapp.com/api/user/getSummaryInfo',
                headers:{'Authorization': 'Bearer ' + token}
            })
                .then(function (response) {
                    Data = JSON.parse(response.data);
                    props.navigation.navigate('Personal1');
                })
                .catch(function(error){
                    console.log(error);
                });
        }
    });
};
const submit = (props, values) =>{
    axios.post('https://afternoon-gorge-17681.herokuapp.com/api/auth/login' ,values)
        .then(function (response) {
            let res = JSON.parse(response.data);
            if(res.error){
                console.log(res.error)
            }else if(res.data){
                storeSetData('token', res.data.token).then(()=>{
                    auth(props);
                });
            }else{
                console.log(res);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
};
const validate = values =>{
    const errors ={};
    if(!values.login){
        errors.login = "please enter you login";
     }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)){
         errors.login = "invalid email adress";
    }

    if(!values.password){
        errors.password = "please enter you password";
    }else if(values.password.length < 5){
        errors.password = "we need more simbols, more then 5"
    }
    return errors;
};

const LoginForm = props =>{
        const {handleSubmit} = props;
        return (
            <View style={styles.container}>

                <Field
                    name="login"
                    component={CustomInput}
                    placeholder={"Login"}
                    style={styles.input}
                    styleContainer={styles.inputContainer}
                />

                <Field
                    name={"password"}
                    component={CustomInput}
                    placeholder={"Password"}
                    style={styles.input}
                    styleContainer={styles.inputContainer}
                    pass={true}
                />

                <CustomButton
                    style={styles.button}
                    title={"Submit"}
                    handler={handleSubmit(submit.bind(null, props))}
                />
                <CustomButton
                    style={styles.button}
                    title={"Sign Up"}
                    handler={() => props.navigation.navigate('Registrate')}
                />
            </View>
        );

};
export default reduxForm({
  form: 'LoginForm',
    validate,
})(LoginForm);

styles = {
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    inputContainer:{
      marginBottom: 25,
    },
    input:{
        borderWidth:1,
        width:200,

    },
    button:{

        width:200,
        height:50,
        marginBottom:5,
    },
};