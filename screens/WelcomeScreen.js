import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class WelcomeScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome</Text>
                <Button onPress={() => this.props.navigation.navigate('LoginScreen')}
                    title="Login" />
                <Button onPress={() => this.props.navigation.navigate('SignUpScreen')}
                    title="SignUp" />
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
