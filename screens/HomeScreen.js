
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator, Image, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export function HomeScreen({ route, navigation }) {
  //DOG SCREEN
  //https://dog.ceo/api/breeds/image/random Fetch!
  //message is the url

  const [svikomentari, setSvikomentari] = useState([]);
  const [nekivalue, setNekivalue] = useState("");

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const uneseniTekstHendler = (unesenitekst) => {
    setNekivalue(unesenitekst);
  }
  const hendlerzagumb = (props) => {
    //props.onAddComment(nekivalue);
    //props.value = nekivalue;
    svikomentari.push(nekivalue);
    //clear out the text after it
    setNekivalue("");
  }

  const getMovies = async () => {
    //
    try {

      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await response.json();
      setData(json);

    } catch (error) {
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
    <ScrollView>
    <View style={styles.container}>

    <View><Text style={styles.boldstuff}>Dog of the day!</Text></View>

      <View style={styles.apireq}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Image 
          source={{
            uri:
              data.message
            }}
            style={ styles.mojaslika}

          />
        )}




        <Text>Input your comment for this doggo :</Text>
        <TextInput
          placeholder="Unesi komentar"
          style={styles.textInput}
          onChangeText={uneseniTekstHendler}
          value={nekivalue}
        />

        <Button
          onPress={hendlerzagumb}
          title="Comment nice things"
        />
        
        <FlatList
          data={svikomentari}
          renderItem={({ item }) => (
            <Text> Anonymous says: {item} </Text>
          )}
        />
        
      </View>




    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mojaslika: {
    alignContent:"center",
    width: 300,
    height: 300,
    marginBottom:10,
  },
  apireq: {
    alignContent:"center",
    alignItems:"center",
    marginBottom:10,
  },
  boldstuff: {
    fontWeight:"bold",
    alignContent:"center",
    alignItems:"center",
    textAlign:"center",
  }
});
