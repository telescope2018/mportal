import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList, AsyncStorage
} from 'react-native';
import ConversationItem from './ConversationItem';
import XmppStore from '../XMPPStore/XmppStore';
const DOMAIN = "mportal";
const SCHEMA = "mobile";

export default class ConversationList extends  PureComponent<props>{
    constructor(props){
        super(props);
        this.state = {
            title:'2'
        }
    }

    _userForName(name){
        return name + '@' + DOMAIN + "/" + SCHEMA;
    }

    componentDidMount(){
        AsyncStorage.getItem('telno',(error,result)=>{
            var telno = result;
            AsyncStorage.getItem('token',(error,result)=>{
                var token = result;
                var hostname = "192.168.82.113";
                XmppStore.login(this._userForName(telno),token,hostname);
            });
        });
    }
    render(){
        return <View style={styles.view}>
                <View style={styles.content}>
                    <FlatList
                        data={[{key:'',avatarUrl:'',conversationName: '福利社',conversationMessage:'本群是内部群'}, {key:'',avatarUrl:'',conversationName: '工作事情沟通',conversationMessage:'你长的真帅'}]}
                        renderItem={({item}) => <ConversationItem key={item.key} navigation={this.props.navigation}  avatarUrl={item.avatarUrl} conversationName={item.conversationName} conversationMessage={item.conversationMessage}/>}
                    />
                </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'white'
    },
    content:{
        flex:1,
        backgroundColor:'#E8E8E8'
    },
    text:{
        fontSize:20,
        color:'red',
        padding:15
    }
})