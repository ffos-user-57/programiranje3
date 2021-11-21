import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function About() {
  return (
    <View style={styles.container}>
      <View style={styles.lijevi}>
        <View>Prva LIJEVO linija </View>
        <View>Druga LIJEVO linija </View>
        <View>Treca LIJEVO linija </View>
      </View>


      <View style={styles.srednji}>
        <View>|</View>
        <View>|</View>
        <View>|</View>
      </View>


      <View style={styles.desni}>
        <View> Prva DESNO linija </View>
        <View> Druga DESNO linija </View>
        <View> Treca DESNO linija </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:5,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lijevi: {
    color:"red",
  }, 
  desni: {
    color:"blue",
  },
  srednji: {
    color:"purple",
  }
});
