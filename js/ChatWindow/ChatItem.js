import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import ChatWindow from "../ChatWindow/ChatWindow";


export default class ConversationItem extends  PureComponent<props>{
    constructor(props){
        super(props);
    }

    render(){
        let view = null;
        if(this.props.type==1){
            view = <View style={styles.container}>
                <View style={styles.imageContent}>
                    <Image style={styles.image} source={require('../../res/images/welcome/login_slide_source_icon_Normal.png')}/>
                </View>
                <View style={styles.content}>
                    <View style={styles.msgContent}>
                        <Text style={styles.message}>{this.props.conversationMessage}</Text>
                    </View>
                </View>
            </View>
        }else{
            view = <View style={styles.container}>
                <View style={styles.contentRight}>
                    <View></View>
                    <View style={styles.msgContentRight}>
                        <Text style={styles.message}>{this.props.conversationMessage}</Text>
                    </View>
                </View>
                <View style={styles.imageContentRight}>
                </View>
            </View>
        }
        return <TouchableHighlight >{view}</TouchableHighlight>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'flex-start',
    },
    imageContent:{
        paddingLeft:15,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:10,
    },
    imageContentRight:{
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:15,
    },
    content: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:73,
    },
    contentRight: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:73,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:10,
    },
    msgContent:{
        backgroundColor:'white',
        borderRadius:5,
    },
    msgContentRight:{
        backgroundColor:'#7EC0EE',
        borderRadius:5,
    },
    image:{
        width:40,
        height:40,
    },
    message:{
        fontSize:16,
        color:'black',
        margin:8
    },

});