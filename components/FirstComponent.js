import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export class FirstComponent extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Welcome {params.user}</Text>
                <Text>This is First React Native component</Text>
            </View>
        );

    }
}