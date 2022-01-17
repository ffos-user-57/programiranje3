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


export function HomeScreen({ route, navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

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

    return (
        <View style={styles.screen}>
            <Text>Fancy People klub 'Vino Gang' {"\n"}{"\n"}</Text>
            <Image 
            style={styles.fancypic}
            source={{uri: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F9%252F2020%252F04%252F01%252Fbest-wine-club-belle-and-bottle-FT-BLOG0420.jpg&q=85"}}
            
            />
            <Text>{"\n"}</Text>
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
    }, buttonContainer: {
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
    fancypic:{
        width:"80%",
        height:400,
    }
});