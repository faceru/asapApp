import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {reduxForm, Field} from "redux-form";
import {CustomButton, CustomInput} from "./../Forms/FormElements";


const GenerateStep1 = (props) =>{
    return(
        <View>
           <Field component={Button}
                  name={'1'}
                title={'Односторонняя'}
           />
            <Field component={Button}
                   name={'2'}
                   title={'Двусторонняя'}
            />
        </View>
    );
};

export default reduxForm({
    form: 'GenerateStep1',

})(GenerateStep1);

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