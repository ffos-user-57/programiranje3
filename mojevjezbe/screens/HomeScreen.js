import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  Image
} from "react-native";
import * as Google from "expo-google-app-auth";
//TODO : its not calling the second API - fix that and then thats it

export function HomeScreen({ route, navigation }) {

  const[isLoading, setLoading] = useState(true);
  const[data,setData] = useState([]);

  //DATATWO:
  const[dataTwo,setDataTwo] = useState([]);


  const getData = async () => {
    try{
      //const response = await fetch("https://catfact.ninja/fact");
      //const json = await response.json();
      //setData(json);


      const settings = {
        method: 'GET',
        mode: "no-cors",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
        //only for post:
        //body: JSON.stringify({
        //  data: data,
        //}),
      };

      //so this works on the phone but the stupid no-cors doesnt work on the web
      // settings should be provided in {} - however they WORKED before without which is confusing
      const responseTwo = await fetch("https://cve.circl.lu/api/cve/CVE-2010-3333",{settings});
      
      //How to SEND A POST request? Like this (also change method up) :
      //        body: JSON.stringify({
      //  name: name,
      //  surname: surname,
      //  password: password,
      //})
      
      const jsonTwo = await responseTwo.json();
      setDataTwo(jsonTwo);
      console.log("Data2 set.");


    }catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }

  };






  const handleGoogleSignIn = () => {
    const config = {
      iosClientId:
        "43210928779-2cpp01ggda8uauqkkbuh6dvne9008veq.apps.googleusercontent.com",
      androidClientId:
        "43210928779-67ummr81diqbv4h722e4bkmniqu0qsmf.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    };

    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type == "success") {
          const { email, name, photoUrl } = user;
          console.log("Signin successfull");
          setTimeout(
            () => navigation.navigate("Settings", { email, name, photoUrl }),
            1000
          );
        } else {
          console.log("Siging not successfull");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    getData();    

  }, [])





  return (
    <View style={styles.screen}>

      <Text style={styles.naslov}>Welcome to the site!{"\n"}{"\n"}</Text>




      <View style={styles.apistuff}>
        <Text styles={styles.apitekst}> {"\n"}{"\n"} API says : </Text>
        <Text>{dataTwo.Modified} {"\n"}</Text>
        <Text>{"\n"} API Done talking. {"\n"}{"\n"}</Text>
      </View>


      <Text>Login to continue...{"\n"}{"\n"}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          title="Google SignIn"
          onPress={handleGoogleSignIn}
          style={styles.button}>
          <View style={styles.signup}>
            <Text style={styles.whitetext}>Sign in with Google
            </Text>
            <Image
              style={styles.slika}
              source={{ uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" }}
            />
          </View>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#1ecbe1",
  },
  button: {
    color: "white",
    width: 180,
    height: 40,
  },
  slika: {
    height: 28,
    width: 28,
    marginLeft: 10,
    marginTop: 2,
  },
  whitetext: {
    color: "white",
    padding: 4,
    marginLeft: 2,
    textAlign: "center",
  },
  signup: {
    flexDirection: "row",
  },
  naslov: {
    fontSize: 20,
  },
  apistuff: {
    textAlign:"center",
    marginBottom:10,
  },
  apitekst: {
    color:"red",
  }
});
