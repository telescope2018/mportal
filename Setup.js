import React, { PureComponent } from 'react';
import Welcome from "./js/Welcome";
import Login from "./js/Login";
import Register from "./js/Register/Register";
import Register1 from "./js/Register/Register1";
import Register2 from "./js/Register/Register2";
import {StackNavigator} from "react-navigation";
import Home from "./js/Home";
import ChatWindow from "./js/ChatWindow/ChatWindow";
import Setting from "./js/Setting/Setting"


const Navigator  = StackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions:{
            header:null
        }
    },
    Login: {
        screen: Login,
        navigationOptions:{
            header:null
        }
    },
    Home:{
        screen: Home,
    },
    Register:{
        screen: Register,
    },
    Register1:{
        screen: Register1,
    },
    Register2:{
        screen: Register2,
    },
    ChatWindow:{
        screen: ChatWindow,
    },
    Setting:{
        screen: Setting,
    }
},{
    transitionConfig: () => ({
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [layout.initWidth, 0, 0]
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
                outputRange: [0, 1, 1, 0.3, 0]
            });

            return { opacity, transform: [{ translateX }] }
        }
    }),
    transitionConfig: () => ({
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [layout.initWidth, 0, 0]
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
                outputRange: [0, 1, 1, 0.3, 0]
            });

            return { opacity, transform: [{ translateX }] }
        }
    }),
    headerMode:'float'
});


export default class Setup extends PureComponent<Props>{
    constructor(Props){
        super(Props);
    }

    render(){
        return  <Navigator></Navigator>;
    }
}