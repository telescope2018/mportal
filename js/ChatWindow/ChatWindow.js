import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TextInput,
    SectionList
} from 'react-native';
import NavigationBar from './../NavigationBar';
import ChatItem from './ChatItem';
import TimeItem from './TimeItem';


export default class ChatWindow extends  PureComponent<props>{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    _onPress =()=> {
        this.props.navigator.back();
    };

    static navigationOptions = {
        title: '对话',//设置标题内容
    };

    static headerMode = 'block'

    render(){
        return <View style={styles.view}>
                <View style={styles.contentView}>
                    <SectionList
                        renderItem={({item}) => <ChatItem key={item.key} type={item.type}  navigation={this.props.navigation} avatarUrl={item.avatarUrl} conversationName={item.conversationName} conversationMessage={item.conversationMessage} />}
                        renderSectionHeader={({section}) => <TimeItem title={section.title}/>}
                        sections={[ // 不同section渲染相同类型的子组件
                            {data: [{key:'',type:1,avatarUrl:'',conversationName: '福利社',conversationMessage:'本群是内部群'}, {key:'',type:2,avatarUrl:'',conversationName: '工作事情沟通',conversationMessage:'你长的真帅反反复复付付付付付付付付付付付付ffffffffff反反复复fffffffffffffff你长的真帅反反复复付付付付付付付付付付付付ffffffffff反反复复fffffffffffffff你长的真帅反反复复付付付付付付付付付付付付ffffffffff反反复复fffffffffffffff你长的真帅反反复复付付付付付付付付付付付付ffffffffff反反复复fffffffffffffff'}], title:'12:24'},
                            {data: [{key:'',type:1,avatarUrl:'',conversationName: '福利社2',conversationMessage:'本群是内部群2'}, {key:'',type:2,avatarUrl:'',conversationName: '工作事情沟通2',conversationMessage:'你长的真帅2'}], title:'12:29'},
                        ]}
                    />
                </View>
                <View style={styles.inputView}>
                    <Image style={styles.chatButton} source={require('../../res/images/ChatWindow/btn_voice_normal.png')} />
                    <TextInput style={styles.textInput}></TextInput>
                    <Image style={styles.chatButton} source={require('../../res/images/ChatWindow/ib_face_normal.png')} />
                    <Image style={styles.chatButton} source={require('../../res/images/ChatWindow/chat_btn_add_normal.png')} />
                </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'white'
    },
    contentView:{
        paddingTop:10,
        flex:1,
        backgroundColor:'#E8E8E8'
    },
    text:{
        fontSize:20,
        color:'red',
        padding:15
    },
    image:{
        width:35,
        height:35
    },
    rightImage:{
        width:35,
        height:35,
    },
    inputView:{
        backgroundColor:'white',
        flexDirection:'row',
        height:50,
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    chatButton:{
        width:35,
        height:35,
        marginLeft:5,
        marginRight:5
    },
    textInput:{
        flex:1
    }
})