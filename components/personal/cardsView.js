import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AsyncStorage from "@react-native-community/async-storage";
import {Data} from './../../components/Forms/LoginForm';

class Cards extends Component{

    renderCards = () =>{
        return(
            <View>

                <Text>{Data.data.cards[0].description}</Text>
            </View>
        );
    };

    render(){
            return (
            <View>
                {this.renderCards()}
            </View>
        );
    }
}
function mapStateToProps(state) {
    return{
      cards:state.cards
    };
}
export default connect(mapStateToProps)(Cards);