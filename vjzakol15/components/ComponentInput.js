import React, {useState} from "react";
import { View, Text, TextInput ,Button, StyleSheet, TouchableOpacity, Image } from "react-native";

const CommentInput = (props) => {

    const [enteredComment, setEnteredComment] = useState("");

    const commentInputHandler = (enteredText) => {
        setEnteredComment(enteredText)
    }

    const addCommentHandler = () => {
        props.onAddComment(enteredComment);
        setEnteredComment("");
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder="Upišite komentar"
            style={styles.textInput}
            onChangeText={commentInputHandler}
            value={enteredComment}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button 
                        title="Unesi komentar"
                        onPress={addCommentHandler}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        margin:10,
        width:"80%",
        borderColor: "gray",
        borderWidth: "1",
    },
    inputContainer: {
        flex:1,
        alignItems:"center",

    },
    buttonContainer: {
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%",
    },
    button: {
        height:40,
        width:"90%",

    },

})
export default CommentInput;





