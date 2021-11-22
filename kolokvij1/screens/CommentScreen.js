import React,{ useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image,TextInput, FlatList } from "react-native";

export function CommentScreen() {

    const [svikomentari, setSvikomentari] = useState([]);
    const [nekivalue, setNekivalue] = useState("");
  
    const uneseniTekstHendler = (unesenitekst) => {
      setNekivalue(unesenitekst);
    }
    const hendlerzagumb = (props) => {
      //props.onAddComment(nekivalue);
      //props.value = nekivalue;
      svikomentari.push(nekivalue);
      //clear out the text after it
      setNekivalue("");
    }
    return (
      <View style={styles.container}>
        <Text>Unesite svoj komentar:</Text>
        <TextInput
          placeholder="Unesi komentar"
          style={styles.textInput}
          onChangeText={uneseniTekstHendler}
          value={nekivalue}
        />
  
        <Button 
          onPress={hendlerzagumb}
          title="Dodaj"
        />
  
      <FlatList
      data = {svikomentari}
      renderItem = { ({ item }) => (
         <Text style={styles.outputtekst}>Anonymous komentira :: {item} </Text>
      )}
      />
  
  
      </View>
            );
}

const styles = StyleSheet.create({
container: {
    marginTop: 30,
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems:"center",
  },
textInput: {
    width:"80%",
    height:"20%",
},
outputtekst:{
    fontWeight:"bold",
    fontSize:16,
}

});