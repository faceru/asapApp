import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {reduxForm, Field} from "redux-form";
import {CustomButton, CustomInput} from "./FormElements";
import {data} from './../../components/Forms/LoginForm'
const submit = values => {
    console.log(values);
};
const validate = values =>{
    const errors ={};
    if(!values.email){
        errors.email = "please enter you login";
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "invalid email adress";
    }

    if(!values.pass){
        errors.pass = "please enter you password";
    }else if(values.pass.length < 5){
        errors.pass = "we need more simbols, more then 5"
    }

    return errors;
};

const RegistrForm = props =>{
    console.log(data);
    const {handleSubmit} = props;
    return(
        <View style={styles.container}>

            <Field
                name="email"
                component={CustomInput}
                placeholder={"Email"}
                style={styles.input}
                styleContainer={styles.inputContainer}
            />
            <Field
                name="pass"
                component={CustomInput}
                placeholder={"Password"}
                style={styles.input}
                styleContainer={styles.inputContainer}
                pass={true}
            />

            <CustomButton
                style={styles.button}
                title={"Submit"}
                handler={handleSubmit(submit)}
            />
            <CustomButton
                style={styles.button}
                title={"Login"}
                handler={() => props.navigation.navigate('Login')}
            />
        </View>
    );

};
export default reduxForm({
    form: 'RegistrForm',
    validate
})(RegistrForm);

styles = {
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    inputContainer:{
        marginBottom: 50,
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