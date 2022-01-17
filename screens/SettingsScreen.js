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

export function SettingsScreen({ route, navigation }) {

    const [dataTwo, setDataTwo] = useState([]);
    const getData = async () => {
        try {
            const responseTwo = await fetch("https://api.sampleapis.com/wines/reds");
            const jsonTwo = await responseTwo.json();
            setDataTwo(jsonTwo);
            console.log("Data2 set.");
            console.log(dataTwo);


        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        getData();

    }, [])


    return (
        <View style={styles.screen}>
            <View style={styles.apistuff}>
                <Text styles={styles.apitekst}> {"\n"}{"\n"} Lista naših vina uz ocjene i slike: </Text>
                <Text> </Text>

                <FlatList
                    data={dataTwo}
                    renderItem={({ item, itemtwo }) => (
                        <View style={styles.centar}>
                            <Text >Vinarija {item.winery} u {item.location} proizvodi: {"\n"}{"\n"} Vino '{item.wine}' : {"\n"}{"\n"} </Text>
                            <Image
                                style={styles.slika}
                                source={{ uri: item.image }}
                            />
                            <Text>Ovo vino ima prosjecni rating : {item.rating.average} od {item.rating.reviews}{"\n"}{"\n"}{"\n"}</Text>
                        </View>
                    )}
                />

                <Text>{"\n"} Posjetite naš webshop za kupnju! {"\n"}{"\n"}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }, apistuff: {
        textAlign: "center",
        marginBottom: 10,
    },
    apitekst: {
        fontWeight:"bold",
        fontSize:16,
    },
    slika: {
        width: 30,
        height: 60,
    },
    centar: {
        margin:10,
        alignContent:"center",
    }
});