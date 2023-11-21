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
            <Text
                style={styles.comment}
            >
                {text}
            </Text>
            
            <Text
                style={styles.date}
            >
                {date}
            </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
        flexDirection: "row",
    },
    image: {
        height: 28,
        width: 28,
        marginRight: 16,
        borderRadius: 14,
        overflow: "hidden",
    },
    commentContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        borderRadius: 6,
        borderTopLeftRadius: 0,
    },
    comment: {
        marginBottom: 8,
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 18,
        color: "#212121",
    },
    date: {
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        fontSize: 10,
        lineHeight: 11.72,
        textAlign: "right",
        color: "#BDBDBD",
    },
});