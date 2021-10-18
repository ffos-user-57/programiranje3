import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, TextInputBase, FlatList } from 'react-native';
import TodoInput from './components/TodoInput';

export default function App() {

  const [todoGoals, setTodoGoals] = useState([]);


  const addTodoHandler = () => todoTitle => {
    setTodoGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: todoTitle } ])
  }

  return (
    <View style={styles.container}>

      
      <TodoInput onAddTodo={addTodoHandler}  />

      <View style={styles.desni}> 
        <Text>{"\n"}Ova aplikacija parsira podatke i vraća vam vrijednosti {"\n"}{"\n"}</Text>

      </View>
      
      {/* {todoGoals.map((goal) => <Text key={goal}>{goal}</Text>)}  */}

      {/* So now we gonna use a flat list, todoGoals nam je lista/array svih itema */}
      <FlatList
        data={todoGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={  
          itemData => (
            <View style={styles.datastuff}> <Text> {itemData.item.value} </Text> </View>
          )
        }
      />
      <StatusBar style="auto" />
    </View>
  );
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

});
