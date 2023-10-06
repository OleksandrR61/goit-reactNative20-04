import { View, Text, StyleSheet } from "react-native";

export default CommentsListItem = ({ comment: { author, text, date } }) => (
    <View
        style={styles.container}
    >
        <Text>{author}</Text>
        <Text>{text}</Text>
        <Text>{date}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {},
});