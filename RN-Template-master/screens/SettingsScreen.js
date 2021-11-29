import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export function SettingsScreen({ route, navigation }) {
  //API STUFF
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPerson = async () => {
    //
    try {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const json = await response.json();
      //YOU NEED TO CHANGE THIS otherwise your data wont work
      //cause this already called {data:{{somestuff: we_need_this_inside }}}
      //meaning if setData is (json.data) then we are now in {somestuff: we_need_this_inside}
      //so down in the flatlist we call item.somestuff!
      setData(json.data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getPerson();
  }, []);
  function handleHomePress() {
    navigation.navigate("Home");
  }


  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.itemWrapper}>  
              <View style={styles.itemImage}> 
                <Image 
                style={styles.image}
                source={{
                  uri:`${item.avatar}`
                }}
                />
              </View> 
              <View style={styles.itemText}> 
                <Text>Ime: {item.last_name} </Text>
                <Text>Prezime: {item.first_name} </Text>
                <Text>Email: {item.email} </Text>
              </View> 
            

            </View>
          )}

        />
      )}





    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemWrapper: {
    backgroundColor:"white",
    flexDirection:"row",
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  }
  
});
