import React, {useState} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";



export function SettingsScreen({ route, navigation }) {

  const [napisano, setNapisano] = useState("-");


  return (
    <View style={styles.screen}>
      <Text>Input your text: </Text>
      <TextInput 
      onChangeText={(val) => setNapisano(val)}
      />

      <Button title="Napiši tekst!" />
      <Text> Rezultat: {napisano} </Text>
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