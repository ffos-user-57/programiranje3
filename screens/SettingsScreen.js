import React,{useState,useEffect} from "react";
import { View, Image, Text, Button, StyleSheet, TouchableOpacity,ActivityIndicator, FlatList} from "react-native";



export function SettingsScreen({ route, navigation }) {

  const[isLoading, setLoading] = useState(true);
  const[data,setData] = useState([]);
  const { name } = route.params;

  const getData = async () => {
    try{
      const response = await fetch("https://catfact.ninja/fact");
      const json = await response.json();
      setData(json);
    }catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }

  } 

  useEffect(() => {
    getData();
  }, [])


  function handleHomePress() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.screen}>
      <Text>You have been logged in ! User: {name}</Text>
      <Text>Daily facts about cats</Text>

      <View> 
      {isLoading ? (
        <ActivityIndicator />

        
      ) : (
          <View  style={styles.itemWrapper}> 
              <Text style={styles.tekst}> Fact: {data.fact} </Text>
          </View>
      )}

      </View>

      <Button title="Go back!" onPress={handleHomePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin:40,
  },
  slika:{
    width:50,
    height:50,
    resizeMode:"contain"
  },
  tekst:{
    marginBottom:20,
  },
  itemWrapper: {
    flexDirection:"row",
    margin:10,
  },

});