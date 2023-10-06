import { FlatList, StyleSheet } from "react-native";

import CommentsListItem from "../CommentsListItem/CommentsListItem";

export default CommentsList = ({comments}) => (
    <FlatList
        data={comments}
        renderItem={({item}) => <CommentsListItem comment={item} />}
        keyExtractor={comment => comment.id}
        style={styles.container}
    />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,

        marginBottom: 32,

        backgroundColor: "tomato",
    },
});