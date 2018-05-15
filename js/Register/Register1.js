/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
import HttpUtils from '../HttpUtils';
import ResourceUtils from "../ResourceUtils";
import dismissKeyboard from 'dismissKeyboard';

export default class Register1 extends PureComponent<Props>{
    constructor(props){
        super(props);
    }

    _onSubmit =(text)=>{
        if(text.length===4){
            dismissKeyboard();
            var data ={
                telno:this.props.navigation.state.params.telno,
                code:text,
                method:'verifyCode'
            };
            HttpUtils.post(ResourceUtils.registerUrl,data)
                .then(result=>{
                    if(result.result.resp_code===0){
                        this.props.navigation.navigate('Register2',{telno:this.props.navigation.state.params.telno,token:result.token})
                    }
                    if(result.result.resp_code===1){
                        this.refs.toast.show("验证码错误");
                    }
                }).catch(error=>{
                this.refs.toast.show(error.message);
            })
        }
    }


    render() {
        return <View style={styles.view}>
                    <View style={styles.view1}>
                        <TouchableHighlight onPress={()=>{
                            this.props.navigation.goBack();
                        }
                        } underlayColor='#D6D6D6'>
                        <Image style={styles.image}  source={require('../../res/images/NavigationBar/actbar_home_up_indicator.png')}/></TouchableHighlight>
                    </View>
                    <View style={styles.view2}>
                        <Text style={styles.text2}>请输入验证码</Text>
                        <Text style={styles.text1} >验证码已发送至手机{this.props.navigation.state.params.telno}</Text>
                    </View>
                <View style={styles.view3}>
                    <TextInput ref="textInput1" style={styles.text4} onChangeText={(text) => {
                        this._onSubmit(text);
                    }}  onFocus={()=>{}}  maxLength={4} keyboardType={'numeric'}></TextInput>

                </View>
                <Toast ref="toast"/>
            </View>
    }
}

const styles = StyleSheet.create({
    view:{
        flex:1
    },
    image:{
      width:40,
      height:40
    },
    view1:{
        margin:15,
        width:50,
        height:50,
        justifyContent:'center'
    },
    view2:{
        marginLeft:40,
        marginRight:40,
    },
    view3:{
        marginTop:60,
        marginLeft:40,
        marginRight:40,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text1:{
        color:'black',
        fontSize:15,
        paddingTop:10
    },
    text2:{
        color:'black',
        fontSize:22
    },
    text3:{
        color:'white',
        fontSize:17
    },
    text4:{
        color:'black',
        fontSize:80,
        width:200
    },
});
