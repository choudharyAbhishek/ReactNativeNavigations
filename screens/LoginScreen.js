import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Login Screen</Text>
                <Button onPress={() => this.props.navigation.navigate('AppDrawerNavigator')}
                    title="complete login" />
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
