import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ScreenOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>First Screen</Text>
                <Button title="Welcome Screen" onPress={() =>
                this.props.screenProps.navigation.navigate("WelcomeScreen")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
