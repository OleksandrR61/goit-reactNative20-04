import { View, ImageBackground, StyleSheet } from "react-native";

import { Image } from "../../components";

const exampleComments = [
    {
        id: 1,
        author: require("../../assets/image/exampleAvatar.jpg"), 
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        data: "09 червня, 2020 | 08:40",
    },
    {
        id: 2,
        author: require("../../assets/image/userExample.jpg"), 
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        data: "09 червня, 2020 | 09:14",
    },
    {
        id: 1,
        author: require("../../assets/image/exampleAvatar.jpg"), 
        text: "Thank you! That was very helpful!",
        data: "09 червня, 2020 | 09:20",
    },
]

export default CommentsScreen = () => (
    <View
        style={styles.container}
    >
        <Image
            source={require("../../assets/image/postImgExample2.jpg")}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingHorizontal: 16,
        paddingVertical: 32,
    },
});