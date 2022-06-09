import React,{useState} from "react";
import {View ,Text,StyleSheet,Button} from "react-native"

import SearchBar from '../components/SearchBar'
import yelp from "../api/yelp";  


const SearchScreen = ()=>{

const[term,setTerm]=useState('');
const[result,setResult]=useState([]);
const[errorMessage,setErrorMessage]=useState("");

const searchApi =  async ()=>{
    try {
        const response = await yelp.get('/search',{
            params:{
                limit:50,
                term,
                location:"san jose"
        
            }
        });
        setResult(response.data.businesses)
    } catch (err) {
        setErrorMessage('Something Went wrong')
    }
    
   
} 

    return(
        <View>
            <SearchBar term={term} 
            onTermChange={setTerm}
            onTermSubmit={searchApi}/>
            <Text>{result.length}</Text>
           {errorMessage ? <Text>{errorMessage}</Text> : null}

        </View>
    )
}



const styles = StyleSheet.create({

})

export default SearchScreen;