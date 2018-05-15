import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import ChatWindow from "../ChatWindow/ChatWindow";


export default class TimeItem extends  PureComponent<props>{
    constructor(props){
        super(props);
    }
    render(){
        return <View style={styles.container}>
                    <View style={styles.backContainer}>
                        <Text style={styles.timeTitle} >{this.props.title}</Text>
                    </View>
            </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection:'row',
        alignItems: 'center',
    },
    backContainer:{
        backgroundColor:'#ABABAB',
        borderRadius:3
    },
    timeTitle:{
        fontSize:16,
        color:'white',
        paddingRight:4,
        paddingLeft:4,
        paddingTop:0,
        paddingBottom:2
    }

});