import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { Linking } from 'react-native';


export function HomeScreen ({route, navigation}) {

    //when someone presses - onPress - we do:
    function handleSettingsPress() {
        navigation.navigate("Settings");
    }

    //we always just return dude it gotta go like that all the functions are above
    return(
        <View style={styles.container}>
            <Text style={styles.naslov}>Dobrodošli na home screen!{"\n"}{"\n"}{"\n"}</Text>
            <Button 
            title="Pređi na Settings stranicu"
            onPress={handleSettingsPress}
            />
            <View style={styles.kontejnerfilmova}>
                    <View style={styles.jedanfilm}>
                        <Text>Film 1 : WhoAmI </Text>
                        <Image 
                        style={styles.mojlogo}
                        source={require('./assets/film1.jpg')}
                        />
                        <Text style={{color: 'blue'}}
                        onPress={() => Linking.openURL('https://www.imdb.com/title/tt3042408/')}>
                        Link na IMDB
                        </Text>
                        <Text>Ocjena : 5/5 {"\n"}{"\n"}{"\n"}</Text>
                    </View>
                    <View style={styles.jedanfilm}>
                    <Text>Film 2 : Matrix </Text>
                    <Image 
                    style={styles.mojlogo}
                    source={require('./assets/film2.jpg')}
                    />
                    <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL('https://www.imdb.com/title/tt0133093/')}>
                    Link na IMDB
                    </Text>
                    <Text>Ocjena : 5/5 {"\n"}{"\n"}{"\n"}</Text>
                    </View>

                    <View style={styles.jedanfilm}>
                    <Text>Film 3 : The fifth estate </Text>
                    <Image 
                    style={styles.mojlogo}
                    source={require('./assets/film3.jpg')}
                    />
                    <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL('https://www.imdb.com/title/tt1837703/')}>
                    Link na IMDB
                    </Text>
                    <Text>Ocjena : 5/5 {"\n"}{"\n"}{"\n"}</Text>
                    </View>

                    <View style={styles.jedanfilm}>
                    <Text>Film 4 : Social Dilemma </Text>
                    <Image 
                    style={styles.mojlogo}
                    source={require('./assets/film4.jpg')}
                    />
                    <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL('https://www.imdb.com/title/tt11464826/')}>
                    Link na IMDB
                    </Text>
                    <Text>Ocjena : 5/5 {"\n"}{"\n"}{"\n"}</Text>
                    </View>
                    <View style={styles.jedanfilm}>
                    <Text>Film 5 : Blackhat </Text>
                    <Image 
                    style={styles.mojlogo}
                    source={require('./assets/film5.jpg')}
                    />
                    <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL('https://www.imdb.com/title/tt2717822/')}>
                    Link na IMDB
                    </Text>
                    <Text>Ocjena : 4/5 {"\n"}{"\n"}{"\n"}</Text>
                    </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    
    },
    naslov: {
        fontWeight: "bold",
        fontSize: "16px",
    },
    kontejnerfilmova: {
        marginTop: "7vh",
        flexGrow: "1",
        backgroundColor: "silver",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    mojlogo: {
        marginLeft: "1vh",
        marginRight: "1vh",
        width: "50px",
        height: "50px",
    },
    jedanfilm: {
        border: "1px solid red",
    }

  });
  