import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Greeting from "./app/components/Greeting";
import Flexbox from "./app/components/Flexbox";
import HandleTextInput from "./app/components/HandleTextInput";
import Dashboard from "./app/components/Dashboard";
import * as Font from "expo-font";

export default class App extends Component {
    componentDidMount() {
        Font.loadAsync({
            'muli-bold': require('./assets/fonts/Muli-Bold.ttf')
        });
    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            //     <Image source={pic} style={{width: 193, height: 110}} />
            //     <Greeting name='Rizqy' />
            // </View>
            // <Flexbox></Flexbox>
            // <HandleTextInput></HandleTextInput>
            <Dashboard></Dashboard>
        )
    }
}
