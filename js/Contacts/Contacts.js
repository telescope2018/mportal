import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableHighlight
} from 'react-native';



export default class Contacts extends  PureComponent<props>{
    constructor(props){
        super(props);
    }

    componentDidMount(){


    }

    render(){
        return <View style={styles.view}>

        </View>;
    }
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#E8E8E8'
    },
    viewItem:{
        height:50,
        backgroundColor:'white',
        justifyContent:'center'
    },
    text:{
        marginLeft:20,
        fontSize:16
    }
})