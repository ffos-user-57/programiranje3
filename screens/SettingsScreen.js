import React,{useState,useEffect} from "react";
import { View, Image, Text, Button, StyleSheet, TouchableOpacity,ActivityIndicator, FlatList} from "react-native";



export function SettingsScreen({ route, navigation }) {

  const[isLoading, setLoading] = useState(true);
  const[data,setData] = useState([]);

  const getData = async () => {
    //https://catfact.ninja/fact
    try{
      const response = await fetch("https://api.sampleapis.com/rickandmorty/characters");
      const json = await response.json();
      setData(json);
    }catch(error){
      console.log(error);
    }finally{
      setLoading(false);
      //setLoading = false; ekvivalent ! ali to se ovdje ovako radi.
    }

  } 

  //useffect hendla promjene bez da mi nes radimo idk
  //znaci inace moras stisnit gumb da se nes dogodi, vamo ne 
  useEffect(() => {
    getData();
  }, [])
  //aha znaci s ovim smo samo pozvali funkciju

  function handleHomePress() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.screen}>
      <Text>You have been logged in !</Text>
      <Text>Your login: XXXXX</Text>

      <View> 
      {isLoading ? (
        <ActivityIndicator />

        
      ) : (
        <FlatList 
        data={data}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <View  style={styles.itemWrapper}> 
            <View>
              <Image 
              
              style={styles.slika}
              source={{
                uri: `${item.image}`
              }}
              />
            </View>
            <View > 
              <Text style={styles.tekst}> Name: {item.name} </Text>
              

            </View>
          </View>
        )}
        /> 
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
