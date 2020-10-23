import React, { Component } from 'react';
import Menu from './MenuComponent';

import Dishdetail from './DishdetailComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'


const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
}, {
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgorundColor: '#512DA8'
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            color: '#000'
        }
    }

})

const HomeNavigator = createStackNavigator({
    Home: { screen: Home },

}, {
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgorundColor: '#512DA8'
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            color: '#000'
        }
    }

})

const AboutNavigator = createStackNavigator({
    About: { screen: About },

}, {
    initialRouteName: 'About',
    navigationOptions: {
        headerStyle: {
            backgorundColor: '#512DA8'
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            color: '#000'
        }
    }

})

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact },

}, {
    initialRouteName: 'Contact',
    navigationOptions: {
        headerStyle: {
            backgorundColor: '#512DA8'
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            color: '#000'
        }
    }

})


const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }

    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }

    },
    Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact',
            drawerLabel: 'Contact Us'
        }

    },
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            title: 'About',
            drawerLabel: 'About Us'
        }


    }
}, {
    drawerBackgroundColor: '#D1C4E9'
})



class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }} >
                <MainNavigator />
            </View>
        )
    }
}
export default Main