import React, { useState } from "react";
import  {View, TextInput, StyleSheet, Button, Text} from "react-native";

const TodoInput = (props) => {
    const [enteredTodo, setEnteredToDo] = useState("-");
    
    const todoInputHandler = (enteredText) => {
        setEnteredToDo(enteredText);
    }

    return (
        
        <View style={styles.lijevi}> 
        <Text>{"\n"}Dobrodošli svi u app!{"\n"}{"\n"}Unesite svoje podatke!</Text>
          <TextInput placeholder="Upiši ime" style={styles.unosteksta} onChangeText={todoInputHandler} value={enteredTodo}/>  
          <Button title="Dodaj" style={styles.buttonx} onPress={props.onAddTodo.bind(this, enteredTodo)} 
          
          />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    lijevi: {
      backgroundColor: "silver",
      alignItems: "center",
    },
    desni: {
      backgroundColor: "grey",
      alignItems: "center",
    },
    unosteksta: {
      width: "80%",
      borderColor:"black",
      backgroundColor:"white",
      borderWidth: 1,
      padding: 10,
      color:"black",
    },
    buttonx: {
      color: "black",
    },
    datastuff: {
      backgroundColor: "silver",
      marginLeft:"10%",
      marginRight:"10%",
      marginTop:"1%",
    },

})

export default TodoInput;







