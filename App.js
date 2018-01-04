import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {FirstComponent} from "./components/FirstComponent";
import {SecondComponent} from "./components/SecondComponent";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('First', { user: 'Lucy' })}
                    title="Go to First"
                />

                <Button
                    onPress={() => navigate('Second', { user: 'Lucy' })}
                    title="Go to Second"
                />
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    First: { screen : FirstComponent},
    Second: { screen : SecondComponent}
});

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
