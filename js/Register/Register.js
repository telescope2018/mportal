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

export default class Register extends PureComponent<Props>{
    constructor(props){
        super(props);
        this.state = { text: '' };
    }

    _onSubmit =()=>{
        dismissKeyboard();
        if(this.state.text.length!=11){
            this.refs.toast.show('输入的手机号码无效，请确认后重试!');
            return;
        }
        var data ={
            telno:this.state.text,
            method:'getCode'
        };
        HttpUtils.post(ResourceUtils.registerUrl,data)
            .then(result=>{
                if(result.result.resp_code===0){
                    this.props.navigation.navigate('Register1',{telno:this.state.text})
                }
            }).catch(error=>{
                this.refs.toast.show(error.message);
            })
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
                        <Text style={styles.text2}>{this.props.navigation.state.params.title}</Text>
                    </View>
                <View style={styles.view3}>
                    <Text style={styles.text1} >手机号码</Text>
                    <TextInput onChangeText={(text) => this.setState({text})} placeholder={'请输入手机号码'} maxLength={11} keyboardType={'numeric'} value={this.state.text}></TextInput>
                </View>
                <TouchableHighlight onPress={this._onSubmit} underlayColor='#D6D6D6'>
                    <View style={styles.view4}>
                        <Text style={styles.text3}>下一步</Text>
                    </View>
                </TouchableHighlight>
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
    },
    view4:{
        marginLeft:40,
        marginRight:40,
        marginTop:15,
        marginBottom:15,
        backgroundColor:'blue',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    text1:{
        color:'black',
        fontSize:15
    },
    text2:{
        color:'black',
        fontSize:22
    },
    text3:{
        color:'white',
        fontSize:17
    },
});
