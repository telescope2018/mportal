import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import ChatWindow from "../ChatWindow/ChatWindow";
import {NavigationActions} from "react-navigation";


export default class ConversationItem extends  PureComponent<props>{
    constructor(props){
        super(props);
    }
    _onPress =()=> {
        this.props.navigation.navigate('ChatWindow', { name: 'ChatWindow' });
    };
    render(){
        return <TouchableHighlight onPress={this._onPress} underlayColor='#D6D6D6'><View style={styles.container}>
                    <View style={styles.imageContent}>
                        <Image style={styles.image} source={require('../../res/images/welcome/login_slide_source_icon_Normal.png')}/>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.conversationName} >{this.props.conversationName}</Text>
                        <Text style={styles.conversationMessage}>{this.props.conversationMessage}</Text>
                    </View>
        </View></TouchableHighlight>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    imageContent:{
        paddingLeft:15,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:10
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:10,
    },
    image:{
        width:50,
        height:50,
    },
    conversationName:{
        fontSize:18,
        color:'#080808'
    },
    conversationMessage:{
        fontSize:16,
        color:'#858585'
    },

});