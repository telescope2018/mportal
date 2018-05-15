import React,{PureComponent} from 'react'
import {View,StyleSheet,Text,StatusBar} from 'react-native';
import PropTypes from 'prop-types';

export default class NavigationBar extends PureComponent<props>{
    static propTypes={
        style:View.propTypes.style,
        title:PropTypes.string,
        titleView:PropTypes.element,
        hidden:PropTypes.bool,
        leftButton:PropTypes.element,
        rightButton:PropTypes.element
    }
    constructor(props){
        super(props);

    }
    render(){
        let content = <View style={styles.navBar}>
            {this.props.leftButton}
            <Text style={styles.text}>{this.props.title}</Text>
            {this.props.rightButton}
                </View>;
        return <View style={styles.view}>
            {content}
        </View>;
    }
}

const styles = StyleSheet.create({
    view:{
        height:40,
        backgroundColor:'white',
        margin:3
    },
    navBar:{
        justifyContent:'space-between',
        alignItems:'center',
        margin:5,
        flexDirection:'row'
    },
    text:{
        fontSize:20,
        color:'#080808'
    }
})