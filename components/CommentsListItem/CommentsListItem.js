import { View, Text, StyleSheet, Image } from "react-native";

export default CommentsListItem = ({ comment: { author, text, date } }) => (
    <View
        style={styles.container}
    >
        <Image
            source={author}
            style={styles.image}
        />

        <View
            style={styles.commentContainer}
        >
            <Text>{text}</Text>
            <Text>{date}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
        flex: 1,
        flexDirection: "row",
    },
    image: {
        height: 28,
        width: 28,
        borderRadius: 14,
        marginTop: 2,
        marginRight: 32,
    },
    commentContainer: {
        padding: 16,
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        borderRadius: 6,
    }
});