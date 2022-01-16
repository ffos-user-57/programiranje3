import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  Image
} from "react-native";
import * as Google from "expo-google-app-auth";

export function HomeScreen({ route, navigation }) {

  const[isLoading, setLoading] = useState(true);
  const[data,setData] = useState([]);
  const[dataTwo,setDataTwo] = useState([]);


  const getData = async () => {
    try{
      
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a&fbclid=IwAR37g2ADoQrFiO4OALMMbysQAswAuWaNxc4R3H9ZKH7NIi-3sEGrW2RhwvY");
      const json = await response.json();
      setData(json.drinks);
      console.log("Data1 set");
      
      const responseTwo = await fetch("https://countriesnow.space/api/v0.1/countries/flag/images?fbclid=IwAR2rxR0VYUlFzR4NTOLkD1pLXvKWX1b6u5Qp_2eywb4MtPfNBQTeElG-GC4");
      const jsonTwo = await responseTwo.json();
      setDataTwo(jsonTwo.data);
      console.log("Data2 set.");

      

    }catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }

  };



  useEffect(() => {
    getData();    

  }, [])





  return (
    <View style={styles.screen}>

      <Text style={styles.naslov}>Welcome to the site!{"\n"}{"\n"}</Text>

      <View style={styles.apistuff}>
        <Text styles={styles.apitekst}> {"\n"}{"\n"} API says : </Text>

        <FlatList
        data = {dataTwo}
        renderItem = { ({ item, itemtwo }) => (
          <Text >Drzava :: {item.name} </Text>
        )}
        />

        <FlatList
        data = {data}
        renderItem = { ({ item }) => (
          <Text >Drink :: {item.strInstructions} </Text>
        )}
        />


        <Text>{"\n"} API Done talking. {"\n"}{"\n"}</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  whitetext: {
    color: "white",
    padding: 4,
    marginLeft: 2,
    textAlign: "center",
  },
  signup: {
    flexDirection: "row",
  },
  naslov: {
    fontSize: 20,
  },
  apistuff: {
    textAlign:"center",
    marginBottom:10,
  },
  apitekst: {
    color:"red",
  }
});
