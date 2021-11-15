import React, {useState} from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CommentItem from "../components/CommentItem";
import CommentInput from "../components/ComponentInput";

export function HomeScreen({ route, navigation }) {
  function handleSettingsPress() {
    navigation.navigate("SecondScreen");
  }

  const [comment,setComment] = useState([]);
  const addCommentHandler = (commentTitle) => {
    setComment((currentComment) => [
      ...currentComment, {id: Math.random().toString(), value: commentTitle}
    ]);
  }

  return (
    <View style={styles.tekst}> 
      <View style={styles.gameResultJumbotron}>  
          <View style={styles.gameResultWrapper}> 
            <Image source="https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg" style={{width:150, height:100}} />
            <Text style={styles.gameResult}> 1</Text>
          </View>
          <Text> : </Text>
          <View style={styles.gameResultWrapper}> 
            <Text style={styles.gameResult}>0 </Text>
            <Image source="https://cdn.britannica.com/42/3842-004-F47B77BC/Flag-Russia.jpg"  style={{width:150, height:100}} />
          </View>
      </View>

    {/*<View style={styles.screen}>
      <Text>The Home Screen!</Text>
      <Button
        title="Go to the Settings screen!"
        onPress={handleSettingsPress}
    />*/}

      <View>
        <CommentInput 
        onAddComment={addCommentHandler}  
        />
        <FlatList
          keyExtractor={(item,index) => item.id}
          data={comment}
          renderItem={
            (itemData) => (
              <CommentItem 
                id={itemData.item.id}
                title={itemData.item.value}
              />
            )

          }
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  tekst: {
    flex:1,
  },
  gameResultJumbotron: {
    flexDirection:"row",
    paddingHorizontal:10,
    justifyContent:"space-between",
    marginTop:5,
    borderBottomColor:"grey",
    borderBottomWidth:2,
    paddingBottom: 20,
  },
  gameResultWrapper: {
    flexDirection:"row",
  },
  gameResult: {
    fontStyle:"Bold",
    fontSize : "30px",
    fontFamily: "Verdana",
    padding: 5,
  },
});