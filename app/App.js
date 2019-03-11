import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator,createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'native-base';
import { Provider } from 'react-redux';

//store redux
import store from './src/publics/redux/store';

//splash
import Splash from './src/screens/Splash';

//auth
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';

//contents
import Home from './src/screens/tabNavigate/Home';
import InputPoke from './src/screens/InputPoke';
import MapPoints from './src/screens/tabNavigate/MapPoints';
import PokeDetail from './src/screens/Detail';
import UpdatePoke from './src/screens/UpdatePoke';
// import Favorite from './src/screens/contents/Favorite';
// import ListofPlaylist from './src/screens/contents/ListofPlaylist'
// import Queue from './src/screens/contents/Queue';
// import Search from './src/screens/contents/Search';
import Setting from './src/screens/tabNavigate/Setting';
// import Player from './src/screens/contents/Player';
// import User from './src/screens/contents/User';

// export default class App extends Component {
//   render() {
//     return <Player tracks={TRACKS} />
//   }
// }

// const tabNavigator = createBottomTabNavigator({

//   home : {

//   }

// })
// 
const AppSplash = createStackNavigator({
    splash : {
        screen : Splash,
    }
})

const AppTabNavigator = createBottomTabNavigator({
    home : {
        screen : Home,
        navigationOptions :{
            title : 'Beranda',
        }
    },
    mapPoints : {
      screen : MapPoints,
      navigationOptions :{
        title : 'Temukan'
      }
    },
    settings : {
        screen : Setting,
        navigationOptions :{
            title : 'Pengaturan'
        }
    }
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        
        let iconType = 'MaterialIcons';
        let iconName;
        if (routeName === 'home') {
            iconType = `MaterialCommunityIcons`;
            iconName = `home${focused ? '' : '-outline' }`;
        } 
        else if (routeName === 'settings') {
            iconType = `MaterialCommunityIcons`;
            iconName = `settings${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'mapPoints') {
            iconType = `MaterialCommunityIcons`;
            iconName = `compass${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
        return <Icon type={iconType} name={iconName} size={24} color={tintColor} style={{color: '#b2b2b2'}}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#f0f0f0',
      inactiveTintColor: 'gray',
      style:{
        paddingTop: 3,
        backgroundColor: '#303030',
      }
    },
    navigationOptions : {
        header : null,
    }
}

)

const AppContents = createStackNavigator({
    navigator : AppTabNavigator,

    inputPoke : {
      screen : InputPoke,
    },
    detail : {
        screen : PokeDetail,
    },
    update : {
        screen : UpdatePoke
    },
    login : {
        screen : Login,
    },
    register : {
        screen : Register,
    }

    // player : {
    //     screen : Player,
    //     navigationOption: {}
    // },

    // user : {
    //     screen : User,
    // },
    // queue : {
    //     screen : Queue
    // },
    // listofPlaylist : {
    //     screen : ListofPlaylist
    // }
})

const AppNavigator = createSwitchNavigator({
    splashScreen : AppSplash,
    contents : AppContents,
})

const AppRoot = createAppContainer(AppNavigator);

export default class Root extends Component {
    render(){
        return(
            <Provider store={store}>
                <AppRoot />
            </Provider>
        )
    }
}