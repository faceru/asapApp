import {Button, Text, TextInput, View} from "react-native";
import React from "react";
export const CustomInput = ({pass,styleContainer,style, placeholder, meta:{error, touched}, input:{onChange}}) => {
    return(
        <View style={styleContainer}>

            <TextInput
                       placeholder={placeholder}
                       onChangeText={onChange}
                       secureTextEntry={pass}
                       style={style}
            />
            {touched && (error &&(<Text style={{color:'red'}}>{error}</Text>))}
        </View>
    );
};
export const CustomButton = props =>{
    const {title, handler,style}  = props;
    return(
        <View style={style}>
            <Button title={title}
                onPress={handler}
            />
        </View>
    );
};