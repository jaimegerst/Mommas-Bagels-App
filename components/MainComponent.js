import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import OptionsInfo from './OptionsInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator(
    {
        Menu: { screen: Menu },
        OptionsInfo: { screen: OptionsInfo }
    }, 
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Menu: { screen: MenuNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;