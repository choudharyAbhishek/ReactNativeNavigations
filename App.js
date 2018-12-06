import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AppDrawerNavigator from './screens/DrawerNavigator';

const AppNavigator = createStackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  SignUpScreen: { screen: SignUpScreen },
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen },
  AppDrawerNavigator: {
    screen: AppDrawerNavigator,
    navigationOptions: {
      header: null
    }
  }
}, {
    navigationOptions: {
      gesturesEnabled: false
    }
  })

const AppNav = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {
    return (
      <AppNav />
    );
  }
}
