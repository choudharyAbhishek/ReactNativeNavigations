import React from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeScreenTabNavigator from './HomeScreenTabNavigator';

const InnerStackNavigator = createStackNavigator({
    createBottomTabNavigator: {
        screen: HomeScreenTabNavigator
    }
})
const AppDrawerNavigator = createDrawerNavigator({
    HomeScreen: { screen: InnerStackNavigator }
})

export default AppDrawerNavigator;
