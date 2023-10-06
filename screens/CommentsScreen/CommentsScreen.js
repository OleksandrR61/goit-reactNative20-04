import { useState } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

import { Image, CommentsList } from "../../components";

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
    const [ newComment, setNewComment ] = useState("");

    return (
        <View
            style={styles.container}
        >
            <Image
                source={require("../../assets/image/postImgExample2.jpg")}
            />

            <CommentsList
                comments={exampleComments}
            />

            
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
});