import { ImageBackground, StyleSheet } from "react-native";

export default Image = ({source, style}) => (
    <ImageBackground
        source={source}
        style={{
            ...styles.image,
            ...style,
        }}
    />
);

const styles = StyleSheet.create({
    image: {
        height: 240,

        marginBottom: 32,

        borderRadius: 8,
        overflow: "hidden",
    }
})