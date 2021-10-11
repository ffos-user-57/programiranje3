import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedbackBase, View, Image} from 'react-native';

export default function App() {
  return (
    
    <View style={styles.x}>
      <Text style={styles.klasiktekst}>Copyright FFOS </Text>
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.klasiktekst}>Lorem ipsum dolor sit amet </Text>
          <Text style={styles.klasiktekst}>Tekst ispod lijevog</Text> 
        </View>
        <View style={styles.right}>
          <Text style={styles.klasiktekst}>Lorem ipsum dolor sit amet</Text>
          <Text style={styles.klasiktekst}>Tekst ispod desnog</Text>
        </View>
        
      </View>
      <View style={styles.imgstyle}> 
          <Image  
              style={styles.tinyLogo}
              source={{
                uri: "https://i.ytimg.com/vi/vOIWqU3_5QA/hqdefault.jpg"
              }}
            />
              <Image  
              style={styles.tinyLogo}
              source={{
                uri: "https://i.ytimg.com/vi/vOIWqU3_5QA/hqdefault.jpg"
              }}
              />
             <Image  
              style={styles.tinyLogo}
              source={{
                uri: "https://i.ytimg.com/vi/vOIWqU3_5QA/hqdefault.jpg"
              }}
              />
      </View>



    </View>




  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0066ff",
  },
  imgstyle : {
    flexDirection: "row",
    backgroundColor: "#0066ff",
  },
  klasiktekst : {
    color:"white",
  },
  left : {
    color: "red",
    margin: 10,
  },
  x : {
    backgroundColor:"black",
  },
  right: {
    color: "yellow",
    margin: 10,
  },
  tinyLogo : {
    width: 50,
    height: 50,
  }
});
