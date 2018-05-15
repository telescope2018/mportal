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
    StatusBar
} from 'react-native';
import  TabNavigator from 'react-native-tab-navigator';
import ConversationList from "./Conversation/ConversationList";
import MyList from "./My/MyList";
import APP from "./App/APP";
import Contacts from "./Contacts/Contacts";

export default class Home extends PureComponent<Props> {
    constructor(props){
        super(props);
        this.state={
            selectedTab:'tab_conversaton',
        }
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: navigation.state.params?navigation.state.params.title:null
    });

    componentDidMount(){
        this.props.navigation.setParams({
            title:'消息'
        })
    }

    _renderBadge =()=> {
        return <View style={styles.badgeView}><Text style={styles.badgeText}>99</Text></View>;
    };
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_conversaton'}
                        selectedTitleStyle={{color:'#4876FF'}}
                        title="消息"
                        renderIcon={() => <Image style={styles.image} source={require('../res/images/tab_conversation_Normal.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#4876FF'}]} source={require('../res/images/tab_conversation_Normal.png')} />}
                        renderBadge = {this._renderBadge}
                        onPress={() => {
                            this.setState({selectedTab: 'tab_conversaton'});
                            this.props.navigation.setParams({
                                title:'消息'
                            })
                        }
                        }>
                        <ConversationList navigation={this.props.navigation}></ConversationList>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_oa'}
                        selectedTitleStyle={{color:'#4876FF'}}
                        title="应用"
                        renderIcon={() => <Image style={styles.image} source={require('../res/images/tab_oa_Normal.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#4876FF'}]} source={require('../res/images/tab_oa_Normal.png')} />}
                        onPress={() => {
                            this.setState({selectedTab: 'tab_oa'});
                            this.props.navigation.setParams({
                                title:'应用'
                            })
                        }
                        }>
                        <APP navigation={this.props.navigation}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_ding'}
                        selectedTitleStyle={{color:'#4876FF'}}
                        title="联系人"
                        renderIcon={() => <Image style={styles.image} source={require('../res/images/tab_ding_Normal.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#4876FF'}]} source={require('../res/images/tab_ding_Normal.png')} />}
                        onPress={() => {
                            this.setState({selectedTab: 'tab_ding'})
                            this.props.navigation.setParams({
                                title:'联系人'
                            })
                        }
                        }>
                        <Contacts navigation={this.props.navigation}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_contact'}
                        selectedTitleStyle={{color:'#4876FF'}}
                        title="我的"
                        renderIcon={() => <Image style={styles.image} source={require('../res/images/tab_contact_Normal.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#4876FF'}]} source={require('../res/images/tab_contact_Normal.png')} />}
                        onPress={() => {
                            this.setState({ selectedTab: 'tab_contact' });
                            this.props.navigation.setParams({
                                title:'我的'
                            })
                        }}>
                        <MyList navigation={this.props.navigation}></MyList>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    image:{
      width:20,
      height:20,
    },
    statusBar:{
        flex: 1,
        height:10,
        backgroundColor:'blue',
    },
    page1:{
        flex: 1,
        backgroundColor: 'red',
    },
    page2:{
        flex: 1,
        backgroundColor: 'blue',
    },
    page3:{
        flex: 1,
        backgroundColor: 'gray',
    },
    page4:{
        flex: 1,
        backgroundColor: 'yellow',
    },
    badgeView:{
        backgroundColor:'red',
        borderRadius:10
    },
    badgeText:{
        color:'white',
        marginLeft:5,
        marginRight:5,
    }
});
