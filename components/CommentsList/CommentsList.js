import { FlatList, StyleSheet } from "react-native";

import CommentsListItem from "../CommentsListItem/CommentsListItem";

export default CommentsList = ({ comments, style }) => (
    <FlatList
        data={comments}
        renderItem={({item}) => <CommentsListItem comment={item} />}
        keyExtractor={comment => comment.id}
        style={{
            ...styles.container,
            ...style,
        }}
    />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        columnGap: 25,
        backgroundColor: "tomato",
    },
});