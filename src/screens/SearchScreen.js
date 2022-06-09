import React,{useState} from "react";
import {View ,Text,StyleSheet,Button} from "react-native"

import SearchBar from '../components/SearchBar'
import yelp from "../api/yelp";  


const SearchScreen = ()=>{

const[term,setTerm]=useState('')
const[result,setResult]=useState([]);

const searchApi =  async ()=>{
    const response = await yelp.get('/search',{
        params:{
            limit:50,
            term,
            location:"san jose"
    
        }
    });
    setResult(response.data.businesses)
   
} 

    return(
        <View>
            <SearchBar term={term} 
            onTermChange={setTerm}
            onTermSubmit={searchApi}/>
            <Text>{result.length}</Text>

        </View>
    )
}



const styles = StyleSheet.create({

})

export default SearchScreen;