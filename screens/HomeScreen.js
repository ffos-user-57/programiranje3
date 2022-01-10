import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity,Image } from "react-native";
import * as Google from "expo-google-app-auth"
import { withSafeAreaInsets } from "react-native-safe-area-context";


export function HomeScreen({ route, navigation }) {
  
  const handleGoogleSignIn = () => {
    const config = {
      iosClientId: "43210928779-2cpp01ggda8uauqkkbuh6dvne9008veq.apps.googleusercontent.com",
      androidClientId: "43210928779-67ummr81diqbv4h722e4bkmniqu0qsmf.apps.googleusercontent.com",
      scopes: ["profile","email"]
    }

    Google.logInAsync(config).then((result) => {
      const {type,user} = result;
      console.log("Pokusaj logiranja...");
      if (type == "success") {
        const {email, name} = user;
        console.log("Uspjesno ulogiran.");
        setTimeout(
          () => navigation.navigate("Settings", {email,name}), 1000
        )
      } else {
        console.log("Ulogiranje nije uspjelo.");
      }
    }).catch((error) => {
      console.log(error);
    })

  }
  


  return (
    <View style={styles.screen}>
      <Text>Login Screen!</Text>
      <View style={styles.googlestyle}>
      <TouchableOpacity
        title="Sign up with Google"
        onPress={handleGoogleSignIn}
        style={styles.gumb}
      >
        <Text style={styles.fontstil}>Sign up with Google</Text>
        <Image 
        style={styles.slika}
        source={{uri:"https://blog.hubspot.com/hubfs/image8-2.jpg"}}
        />
      </TouchableOpacity>
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
  googlestyle: {
    margin:40,
    width:200,
  },
  slika:{
    width:50,
    height:50,
  },
  gumb:{
    backgroundColor:"blue",
    marginTop:20,
    flexDirection:"row",
    color:"red",
  },
  fontstil:{
    color:"white",
    margin:10,
  }
});