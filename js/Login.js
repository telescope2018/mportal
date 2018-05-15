import React, { PureComponent } from 'react';
import {
    Text, Image, View, StyleSheet,ImageBackground,TextInput,StatusBar,TouchableHighlight,AsyncStorage
} from 'react-native';
import {NavigationActions} from "react-navigation";
import Register from "./Register/Register";
import Toast, {DURATION} from 'react-native-easy-toast';
import ResourceUtils from "./ResourceUtils";
import HttpUtils from "./HttpUtils";
import dismissKeyboard from 'dismissKeyboard';


export default class Main extends PureComponent<Props>{

    constructor(Props){
        super(Props);
        this.state = { telno: '',password:'' };
    }

    componentDidMount(){

    }

    _onSubmit =()=>{
        dismissKeyboard();
        if(this.state.telno.length===0||this.state.password.length===0){
            this.refs.toast.show('请输入用户名密码!');
            return;
        }
        var data ={
            telno:this.state.telno,
            password:this.state.password,
            method:'login'
        };
        HttpUtils.post(ResourceUtils.loginUrl,data)
            .then(result=>{
                if(result.result.resp_code===0){
                        AsyncStorage.setItem('telno',data.telno);
                        AsyncStorage.setItem('token',result.token);
                        let resetAction = NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Home'}),
                            ]
                        },{
                            headerMode: 'none',
                        })
                        this.props.navigation.dispatch(resetAction);
                }else{
                    this.refs.toast.show(result.result.resp_msg);
                }
            }).catch(error=>{
            this.refs.toast.show(error.message);
        })
    }

    render(){
        return  <View style={styles.view}>
            <ImageBackground style={styles.image}  source={require('../res/images/login/timg.jpg')} ><View style={styles.container}>
                <StatusBar
                    translucent={false}
                />
                <View style={styles.view1}>
                    <Image style={[styles.image1,]}  source={require('../res/images/welcome/login_slide_source_icon_Normal.png')} />
                    <Text style={styles.text1}  onPress = {()=> {
                        this.props.navigation.navigate('Register',{title:'新用户注册'})
                    }}>新用户注册</Text>
                </View>
                <View>
                    <Text style={styles.text2}>欢迎使用mpotal移动门户</Text>
                    <Text style={styles.text1}>手机号码</Text>
                    <TextInput onChangeText={(text) => this.setState({telno:text})} maxLength={11} keyboardType={'numeric'}></TextInput>
                    <Text style={styles.text1}>密码</Text>
                    <TextInput onChangeText={(text) => this.setState({password:text})} secureTextEntry={true} maxLength={20}></TextInput>
                </View>
                <View style={styles.view2}>
                <TouchableHighlight onPress={this._onSubmit} underlayColor='#D6D6D6'>
                    <View style={styles.view3}>
                        <Text style={styles.text3}>登录</Text>
                    </View></TouchableHighlight>
                </View>
                <Text style={styles.text4}  onPress = {()=> {
                    this.props.navigation.navigate('Register',{title:'请输入手机号码'})
                }}>忘记密码</Text></View>
            </ImageBackground>
            <Toast ref="toast"/>
        </View>
    }
}

const styles = StyleSheet.create({
    view:{
      flex:1,
    },
    container:{
        marginLeft:40,
        marginRight:40,
    },
    image:{
        flex:1
    },
    image1:{
        height:45,
        width:45
    },
    view1:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:40,
        marginBottom:40,
        alignItems:'center'
    },
    view2:{
        marginTop:15,
        marginBottom:15,
    },
    view3:{
        backgroundColor:'blue',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    text1:{
        color:'white',
        fontSize:15,
        marginTop:15,
        marginBottom:5
    },
    text2:{
        color:'white',
        fontSize:22
    },
    text3:{
        color:'white',
        fontSize:17
    },
    text4:{
        color:'white',
        fontSize:15
    }
});