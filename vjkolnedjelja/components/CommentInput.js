import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export function CommentInput() {
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
      <Text>Input your text:</Text>
      <TextInput
        placeholder="Unesi komentar"
        style={styles.textInput}
        onChangeText={uneseniTekstHendler}
        value={nekivalue}
      />

      <Button 
        onPress={hendlerzagumb}
      />

    <FlatList
    data = {svikomentari}
    renderItem = { ({ item }) => (
      <Text> {item} </Text>
    )}
    />


    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop:20,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });