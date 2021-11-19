import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";

export function SettingsScreen({ route, navigation }) {
  //"ne podrzava left i right na mobilnoj verziji, vec treba stavit  space-between ili flex-end/flex-start - za alignitems i justifycontent" -Dunja
  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.glavniview}>
      <View style={styles.naslovniview}>
        <Text style={styles.naslov}>Prve postave</Text>
      </View>
      <View style={styles.screen}>

        <View style={styles.leftv}>
          <Text>10</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={{ width: 40, height: 20 }}
          />
          <Text>Brozovic M.</Text>
        </View>

        <View style={styles.rightv}>
          <Text>Barinov D.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={{ width: 40, height: 20 }}
          />
          <Text>10</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftv}>
          <Text>8</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={{ width: 40, height: 20 }}
          />
          <Text>Pletikosa Idk.</Text>
        </View>

        <View style={styles.rightv}>
          <Text>Putin V.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={{ width: 40, height: 20 }}
          />
          <Text>11</Text>
        </View>

      </View>


      <View style={styles.naslovniview}>
        <Text style={styles.naslov}>Zamjene</Text>
      </View>

      <View style={styles.screen}>

        <View style={styles.leftv}>
          <Text>2</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={{ width: 40, height: 20 }}
          />
          <Text>Livaković Idk.</Text>
        </View>

        <View style={styles.rightv}>
          <Text>Kalashnikov M.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={{ width: 40, height: 20 }}
          />
          <Text>47</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "space-between",
  },
  leftv: {
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "left",
  },
  rightv: {
    alignItems: "right",
    flexDirection: "row",
    justifyContent: "right",
  },
  naslovniview: {
    alignItems: "center",
  },
  naslov: {
    margin: 20,
    fontWeight: "bold",
  },

});
