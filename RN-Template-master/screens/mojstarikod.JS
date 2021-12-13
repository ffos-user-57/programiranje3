import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput} from "react-native";


export function HomeScreen({ route, navigation }) {
  const [name, setName] = useState("");
  const [prezime, setPrezime] = useState("");


  //https://webhook.site/8617b265-ae8b-4667-960d-f33f5eb3ce89

  const sendRequest = async () => {
    try {
      await fetch("https://webhook.site/8617b265-ae8b-4667-960d-f33f5eb3ce89", {
      method: "post",
      mode: "no-core",
      headers: {
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name: name
      })
    })
    setName("");
    } catch (error) {
      //
    }

  }


  function handleSettingsPress() {
    navigation.navigate("Settings");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputwrapper}> 
        <Text>Unesi ime :</Text>
        <TextInput 
        style={styles.input}
        onChange={setName}
        value={name}

        />

      </View>
      <Button title="Pošalji" onPress={sendRequest} />

     

      <View style={styles.inputwrapper}> 
        <Text>Unesi Prezime :</Text>
        <TextInput 
        style={styles.input}
        onChange={setPrezime}
        value={prezime}

        />

      </View>
      <Button title="Pošalji" onPress={sendRequest} />


    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    padding:10,
    borderWidth: 1,
    borderRadius:10,
  }



});
