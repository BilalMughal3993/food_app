import React,{useEffect, useState} from "react";
import {View ,Text,StyleSheet,Button} from "react-native"

import SearchBar from '../components/SearchBar'
import useResults from "../hooks/useResults";
import yelp from "../api/yelp";  


const SearchScreen = ()=>{

const[term,setTerm]=useState('');
const[searchApi,errorMessage,result]=useResults()


    return(
        <View>
            <SearchBar term={term} 
            onTermChange={setTerm}
            onTermSubmit={searchApi}/>
            <Text>{result.length}</Text>
            {errorMessage ?<Text>{errorMessage}</Text>:null}
        </View>
    )
}



const styles = StyleSheet.create({

})

export default SearchScreen;