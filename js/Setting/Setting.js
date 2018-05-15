import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import {NavigationActions} from "react-navigation";

export default class Setting extends  PureComponent<props>{
    constructor(props){
        super(props);
    }

    navagation_login(){
        let resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Login'}),
            ]
        },{
            headerMode: 'none',
        })
        this.props.navigation.dispatch(resetAction);
    }

    render(){
        return <View style={styles.view}>
            <View style={styles.viewItem}>
                <TouchableHighlight onPress={()=>{
                    AsyncStorage.removeItem('token');
                    this.navagation_login();
                }
                } underlayColor='#D6D6D6'>
                    <Text style={styles.text}>退出登录</Text>
                </TouchableHighlight>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#E8E8E8'
    },
    viewItem:{
        height:50,
        backgroundColor:'white',
        justifyContent:'center'
    },
    text:{
        marginLeft:20,
        fontSize:16
    }
})