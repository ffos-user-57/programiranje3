import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedbackBase, View, Image, Button, Alert, TouchableOpacity, ViewPagerAndroidBase } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tekst}>Copyright @FFOS </Text>


    <View style={styles.header}>  
        <Text style={styles.tekst2}>Test App header</Text>
        
    </View>
      

      <StatusBar style="auto" />

    <View style={styles.jumbotron}>
      <View style={styles.leftcontainer}>
        <Text>Left aligned low quality doggo</Text>
        <Image  
        style={styles.tinyLogo}
        source={{
          uri: "https://i.ytimg.com/vi/vOIWqU3_5QA/hqdefault.jpg"
        }}
        />
        
      </View>
      <View style={styles.rightcontainer}>
        <Text>Right aligned low quality doggo</Text>
        <Image  
        style={styles.tinyLogo}
        source={{
          uri: "https://i.ytimg.com/vi/vOIWqU3_5QA/hqdefault.jpg"
        }}
        />
      </View>

    </View>

        <Text style={styles.centriranitekst}>Thats it for today's presentation of NodeJS+Expo.</Text>

      <View style={styles.pored}>
        <Image  
        style={styles.tinyLogoCenter}
        source={require("./assets/pixl.jpg")}
        />
        <Image  
        style={styles.tinyLogoCenter}
        source={require("./assets/pixl.jpg")}
        />


      <Text>Dogs™</Text>
        
      </View>


      <Button 
      title="GumbKojiRadiSamoNaMobitelima"
      onPress = {() => Alert.alert("Button pressed.") } 
      style={styles.gumb}
      />
      <Text>Both buttons dont work for PC</Text>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={() => Alert.alert("Touchable opacity pressed." )}
        >
        <Text style={styles.tekst}> Touchable opaciteyyeyyy CLICK HERE </Text>
      </TouchableOpacity>


    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',


  },
  header : {
    backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 30,
  },
  tekst : {
    color: 'white',
    backgroundColor: 'blue',
  },
  tekst2 : {
    color: 'white',
    fontSize: 50, 
  },
  jumbotron : {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0066ff",
  },
  leftcontainer : {
    color: "white",
    backgroundColor: "#cce0ff",
  },
  rightcontainer: {
    color: "blue",
    backgroundColor: "#80b3ff",
  },
  tinyLogo : {
    width: 200,
    height: 200,
  },
  centriranitekst : {
    textAlign: "center",
  },
  tinyLogoCenter : {
    width: 100,
    height: 100,
    
  },
  pored : {
    flexDirection: "row",
    marginLeft: 20,
  },
  gumb : {
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center',    
  },
  touchableContainer : {
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center',
  }


});
