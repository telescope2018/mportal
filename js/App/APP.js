import React,{PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableHighlight
} from 'react-native';

export default class APP extends  PureComponent<props>{
    constructor(props){
        super(props);
    }



    render(){
        return <View style={styles.view}>
            <TouchableHighlight onPress={()=>{
                this.props.navigation.navigate('Setting');
            }
            } underlayColor='#D6D6D6'>
                <View style={styles.viewItem}>
                    <Text style={styles.text}>应用</Text>
                </View>
            </TouchableHighlight>
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