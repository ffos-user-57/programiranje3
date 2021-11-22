import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";


export function HomeScreen() {
    return(
 <View style={styles.glavniview}> 

    <View style={styles.screen}>
      <View style={styles.leftv}>
        <Image
          source={{
            uri:
              "https://th.bing.com/th/id/R.8b544a073be3ca44cea573b4e5524439?rik=bq43oxdyLUOQmQ&riu=http%3a%2f%2fi0.kym-cdn.com%2fphotos%2fimages%2ffacebook%2f000%2f876%2f830%2f14c.jpg&ehk=K0NHFdYWrhtUJ7TFIZ6JpOb8EpDgqJfmpWtVfRyvhPY%3d&risl=&pid=ImgRaw&r=0",
          }}
          style={ styles.mojaslika}
        />
        <View>
            <Text style={styles.desnitekst}>Filip</Text>
            <Text style={styles.desnitekst}>Omazic</Text>
            <Text style={styles.desnitekst}>fomazic@ffos.hr</Text>
        </View>
    </View>
  </View>

  <View style={styles.nekistil}>
        <Text style={styles.desnitekstx}>FFOS Diplomski, Preddiplomski UNIZD</Text>
        <Text style={styles.desnitekstx}>Srednja ekonomska skola u Đakovu</Text>
        <Text style={styles.desnitekstx}>Osnovna škola IGK, Đakovo</Text>
  </View>
</View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  screen: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 5,
    
  },
  glavniview: {
    margin:10, 
  },
  leftv: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  
  mojaslika: {
      width:250,
      height:300,
  },
  desnitekst: {
      marginLeft:5,
      fontWeight:"bold",
  },
  desnitekstx: {
    marginLeft:5,
    marginTop:10,
    fontWeight:"bold",
},


});