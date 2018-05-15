import React, {PureComponent} from 'react'
import {View,StyleSheet,Image,AsyncStorage,StatusBar} from 'react-native';
import {NavigationActions} from "react-navigation";
import ResourceUtils from "./ResourceUtils";
import HttpUtils from "./HttpUtils";
import Toast, {DURATION} from 'react-native-easy-toast';

export default class Welcome extends PureComponent<props>{
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
    navagation_Main(){
        let resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home'}),
            ]
        },{
            headerMode: 'none',
        })
        this.props.navigation.dispatch(resetAction);
    }
    componentDidMount(){
        this.timer=setTimeout(()=> {
            AsyncStorage.getItem('token',
                (error,result)=>{
                    if (error){
                        alert('取值失败:'+error);
                    }else{
                        if(result==null){
                            this.navagation_login();
                        }else{
                            var data ={
                                token:result,
                                method:'verifyToken'
                            };
                            HttpUtils.post(ResourceUtils.loginUrl,data)
                                .then(result=>{
                                    if(result.result.resp_code===0){
                                        this.navagation_Main();
                                    }else{
                                        this.refs.toast.show(result.result.resp_msg);
                                        AsyncStorage.removeItem('token');
                                        this.timer=setTimeout(()=> {
                                            this.navagation_login();
                                        }, 1000);
                                    }
                                }).catch(error=>{
                                this.refs.toast.show(error.message);
                                this.timer=setTimeout(()=> {
                                    this.navagation_Main();
                                }, 1000);
                            })
                        }

                    }
                })
        }, 1000);
    }
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer);
    }
    render(){

        return <View style={styles.container}>
            <StatusBar
                hidden = {true}
            />
            <Image style={styles.image}  source={require('../res/images/welcome/login_slide_source_icon_Normal.png')} />
            <Toast ref="toast"/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    image:{
        width:100,
        height:100
    }
});