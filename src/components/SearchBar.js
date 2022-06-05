import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import {Feather} from "@expo/vector-icons"

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.backGroundC}>
        <Feather style={styles.iconStyle} name='search'/>
        <TextInput 
        placeholder='Search' 
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
        />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    backGroundC:{
        backgroundColor:"#F0E0EE",
        marginHorizontal:20,
        borderRadius:50,
        height:50,
        marginTop:15,
        flexDirection:"row"
    },
    inputStyle:{
        flex:1,
        fontSize:18,

    },
    iconStyle:{
        fontSize:35,
        alignSelf:"center",
        marginHorizontal:15
    }
})