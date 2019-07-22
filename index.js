/**
 * @format
 */
import React, {Component} from "react"
import {AppRegistry, StyleSheet, View, ScrollView, Text, Button} from 'react-native';

import {name as appName} from './app.json';
import {Provider} from "react-redux";
import store from "./components/store";
import AppContainer from './components/routes';



class Main extends Component {

    render() {
        return (
                <Provider store={store}>

                        <AppContainer/>

                        <Button title={'test'}
                                onPress={() => this.props.navigation.navigate('Login')}
                        />

                </Provider>
        );
    }
}


AppRegistry.registerComponent(appName, () => Main);
