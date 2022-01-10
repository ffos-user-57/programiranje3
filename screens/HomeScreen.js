import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import * as Google from "expo-google-app-auth"


export function HomeScreen({ route, navigation }) {
  
  const handleGoogleSignIn = () => {
    const config = {
      iosClientId: "43210928779-2cpp01ggda8uauqkkbuh6dvne9008veq.apps.googleusercontent.com",
      androidClientId: "43210928779-67ummr81diqbv4h722e4bkmniqu0qsmf.apps.googleusercontent.com",
      //iosClientId: "1057163452753-k9uf62a411uv9lnobhll1k5go991l06t.apps.googleusercontent.com",
      //androidClientId: "5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25",
      scopes: ["profile","email"]
    }
    //signup

    Google.logInAsync(config).then((result) => {
      const {type,user} = result;
      //type je response Success ili FAil
      console.log("Attempting login...");
      if (type == "success") {
        const {email, name} = user;
        console.log("Signin Successful.");
        setTimeout(
          () => navigation.navigate("Settings", {email,name}), 1000
        )
      } else {
        console.log("Signin Failed. Check your stuff");
      }
    }).catch((error) => {
      console.log(error);
    })

  }
  
  
  function handleSettingsPress() {
    navigation.navigate("Settings");
  }

  return (
    <View style={styles.screen}>
      <Text>The Home Screen!</Text>
      <Button
        title="Go to the Settings screen!"
        onPress={handleSettingsPress}
      />
      <Text>Hey</Text>
      <View style={styles.googlestyle}>
      <Button
        
        title="Sign up with Google"
        onPress={handleGoogleSignIn}
      />
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
    width:400,
  },
});
