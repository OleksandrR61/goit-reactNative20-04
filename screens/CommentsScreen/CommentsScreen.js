import { useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";

import { Image, CommentsList, InputText, ButtonImage } from "../../components";

const months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

const exampleComments = [
    {
        id: 1,
        author: require("../../assets/image/exampleAvatar.jpg"), 
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
    },
    {
        id: 2,
        author: require("../../assets/image/userExample.jpg"), 
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:14",
    },
    {
        id: 3,
        author: require("../../assets/image/exampleAvatar.jpg"), 
        text: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 09:20",
    },
    {
        id: 4,
        author: require("../../assets/image/exampleAvatar.jpg"), 
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
    },
    {
        id: 5,
        author: require("../../assets/image/userExample.jpg"), 
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:14",
    },
    {
        id: 6,
        author: require("../../assets/image/exampleAvatar.jpg"), 
        text: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 09:20",
    },
]

export default CommentsScreen = () => {
    const [ comments, setComments ] = useState(exampleComments)
    const [ newComment, setNewComment ] = useState("");

    const handlePress = () => {
        if (newComment) {
            const dateNow = new Date();
            
            setComments(comments => [...comments, {
                id: comments.length + 1,
                author: require('../../assets/image/userExample.jpg'),
                text: newComment,
                date: `${dateNow.getDate() + 1} ${months[dateNow.getMonth()]}, ${dateNow.getFullYear()} | ${dateNow.getHours()}:${dateNow.getMinutes() < 10 ? "0" + dateNow.getMinutes() : dateNow.getMinutes()}`
            }]);
            setNewComment("");
            
            Keyboard.dismiss();
        };
    };

    return (
        <View
            style={styles.container}
        >
            <Image
                source={require("../../assets/image/postImgExample2.jpg")}
            />

            <CommentsList
                comments={comments}
                style={styles.commentsList}
            />

            <View
                style={styles.inputContainer}
            >
                <InputText
                    value={newComment}
                    onChangeText={setNewComment}
                    placeholder="Коментувати..."
                    style={styles.input}
                />

                <ButtonImage
                    isReady={Boolean(newComment)}
                    image={require("../../assets/image/vector.png")}
                    onPress={handlePress}
                    style={styles.buttonImageContainer}
                    styleImage={styles.buttonImage}
                />
            </View>            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 16,
    },
    commentsList: {},
    inputContainer: {
        position: "relative",
    },
    input: {
        marginBottom: 16,

        borderRadius: 100,

        fontFamily: "Inter-Medium",
        fontWeight: "500",
        lineHeight: 19.36,
    },
    buttonImageContainer: {
        position: "absolute",
        top: 8,
        right: 8,

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
        height: 34,
        width: 34,

        borderRadius: 17,

        backgroundColor: "#FF6C00",
    },
    buttonImage: {
        width: 10,
        height: 14,
    },
});