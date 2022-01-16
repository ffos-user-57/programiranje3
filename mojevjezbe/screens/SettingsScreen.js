import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";

export function SettingsScreen({ route, navigation }) {
  const { name } = route.params;
  const { email } = route.params;
  const { photoUrl } = route.params;

  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.screen}>
      <Text>Login successfull !{"\n"}{"\n"}</Text>

      <Image 
          style={styles.slika}
          source={{uri:photoUrl}}
      />

      <Text>{"\n"}{"\n"} User: {name}</Text>
      <Text> Email: {email}</Text>
      <Button title="Go to the Home screen!" onPress={handleHomePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slika: {
    width:50,
    height:50,
  }
});
