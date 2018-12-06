import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SignUp Screen</Text>
        <Button onPress={() => this.props.navigation.navigate('LoginScreen')}
        title="go to login screen"/>
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
