import React from "react";
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function HomeScreen({ route, navigation }) {
  function handleSettingsPress() {
    navigation.navigate("Settings");
  }

  return (
    <View style={styles.screen}>
      
      <ScrollView> 
        <View style={styles.kutija}>
          <Image
            style={styles.slika}
              source={require('./src/whoami.jpg')}
          />
          <Text style={styles.naslov}>WhoAmI</Text>
          <Text style={styles.tekst}>Njemački film o underground hakerskoj grupi. Hakeri grupe CLAY postaju svijetski poznati svojim haktivističkim napadima i priča oko glavnog lika Benjamina postaje sve kompliciranija.</Text>
          <Text style={styles.ocj}>9/10</Text>
        </View>
        
        <View style={styles.kutija}>
          <Image
            style={styles.slika}
              source={require('./src/godfather.jpg')}
          />
          <Text style={styles.naslov}>Kum</Text>
          <Text style={styles.tekst}>Pratimo mafijašku obitelj Corleone pod vodstvom Vita. Iskusimo kakav je mafijaški život kroz tragedije i uspone ove kriminalne organizacije.</Text>
          <Text style={styles.ocj}>9/10</Text>
        </View>

        <View style={styles.kutija}>
          <Image
            style={styles.slika}
              source={require('./src/hacksaw.jpg')}
          />
          <Text style={styles.naslov}>Hacksaw Ridge</Text>
          <Text style={styles.tekst}>U drugom svijetskom ratu svijet je usmjeren na usavršavanje načina za ubijanje neprijatelja, no jedan američki vojnik odlučuje otići u rat bez oružja, te biti doktor. Odbija ubiti i samo želi pomoći.</Text>
          <Text style={styles.ocj}>8.5/10</Text>
        </View>

        <View style={styles.kutija}>
          <Image
            style={styles.slika}
              source={require('./src/point.jpg')}
          />
          <Text style={styles.naslov}>Point Break (2015)</Text>
          <Text style={styles.tekst}>Mladi agent FBI-a infiltrira se u izvanredan tim ekstremnih sportaša za koje sumnja da su organizirali niz neviđenih, sofisticiranih korporativnih pljački.</Text>
          <Text style={styles.ocj}>6.5/10</Text>
        </View>


      <Text style={styles.copy}>Copyright by me</Text>

    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
  },
  kutija: {
    border: "1px solid blue",
    padding: "1vh",
    flex: 1,
  },
  naslov: {
    fontStyle: "bold",
    fontFamily: "Verdana",
    fontSize: "16px",
  },
  tekst: {
    color: "blue",
  },
  ocj: {
    color: "gold",
  },
  slika: {
    width: "70px",
    height: "90px",
  },
  copy: {
    paddingTop: "20px",
  },
});