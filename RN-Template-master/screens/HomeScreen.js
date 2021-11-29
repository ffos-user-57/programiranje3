import React,{useState, useEffect} from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
//notes to self
export function HomeScreen({ route, navigation }) {
  //useEffect autoruns functions? idk
  //we will use it like this: if data in data variable
  //then we'll print out stuff i guess

  //API STUFF
  const [isLoading, setLoading] = useState(true); 
  const [data, setData] = useState([]);

  const getMovies = async () => {
    //
    try {
      //cve api thing -https://v1.cveapi.com/CVE-2019-9956.json
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setData(json.movies);

    } catch(error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  //pazi di ti je useEffect, bio mi je u funkciji
  //kak ces callat funkciju iz same sebe 
  //dosl nije callana onda 
  useEffect(() => {
    getMovies();
  }, []);

  function handleSettingsPress() {
    navigation.navigate("Settings");
  }

  return (
    <View style={styles.screen}>
       {isLoading ? (
        <ActivityIndicator /> 
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id }
          renderItem={({item}) => (
            <Text> {item.title}, {item.releaseYear} </Text>
          )}

        />
      ) }
      



      <View>
        <Text> 
          Data Length: {data.length}
        </Text>

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
});
