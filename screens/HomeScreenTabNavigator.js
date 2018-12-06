import React, {Component} from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
//import Icons from 'react-native-elements';
import ScreenOne from './TabNavigator/ScreenOne';
import ScreenTwo from './TabNavigator/ScreenTwo';

const HomeScreenNavigator = createBottomTabNavigator({
    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Home',
            /*             tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-bookmarks" size={20}/>
                  )*/
        }
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Menu',
            /*             tabBarIcon: ({ tintColor }) => (
                            <Icon name="ios-bookmarks" size={20}/>
                          ) */
        }
    }
})

const HomeScreenTabNavigator = createAppContainer(HomeScreenNavigator);

export default class AppScreenTabNavigator extends Component {
    render() {
        return (
            <HomeScreenTabNavigator screenProps={{navigation: this.props.navigation}}/>
        )
    }
}
