import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//dude what why do we RETURN inside EXPORT in RN, confusing
//so im guessing route, navigation are gonna be seperate modules
export function SettingsScreen ({route, navigation}) {

    //handle the click - go home
    function handleHomePress() {
        navigation.navigate("Home");
    }

    //just some return stuff, button onpress calls handleHomePress
    return(
        <View style={styles.container}>
            <Text>Settingz skrin {"\n"}{"\n"}{"\n"}</Text>
            
            <Button 
            title="Go to the Home Screen"
            onPress={handleHomePress}

            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems:"center",
      flex:1,
      justifyContent: "center",
    },
  });
  