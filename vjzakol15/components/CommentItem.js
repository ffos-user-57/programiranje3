import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";

const CommentItem = (props) => {
    return (
        <TouchableOpacity> 
            <View style={styles.listItem}>
                <Text>{props.title}</Text>

            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    listItem: {
        padding:10,
        marginVertical:10,
        borderColor:"gray",
        borderWidth:1,
    }

})
export default CommentItem;





