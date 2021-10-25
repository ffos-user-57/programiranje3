import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export function HomeScreen ({route, navigation}) {

    //when someone presses - onPress - we do:
    function handleSettingsPress() {
        navigation.navigate("Settings");
    }

    //we always just return dude it gotta go like that all the functions are above
    return(
        <View style={styles.container}>
            <Text>Pozdrav od domaćeg ekrana {"\n"}{"\n"}{"\n"}</Text>


            <Button 
            title="Go to the settings screen"
            onPress={handleSettingsPress}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  