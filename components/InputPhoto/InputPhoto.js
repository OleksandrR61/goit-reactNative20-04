import { View, ImageBackground, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const photo = require("../../assets/image/postImgExample1.jpg");

export default InputPhoto = ({image, onPress}) => (
    <View
        style={styles.container}
    >
        <TouchableOpacity
            style={styles.containerImage}
            onPress={() => onPress(photo)}
            disabled={image}
        >
            <ImageBackground
                source={image}
                style={styles.image}
            />
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => onPress(photo)}
        >
            <Text
                style={styles.text}
            >
                {image
                    ? "Редагувати фото"
                    : "Завантажте фото"
                }
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
                style={{
                    ...styles.button,
                    backgroundColor: image
                        ? "rgba(255, 255, 255, 0.3)"
                        : "rgba(255, 255, 255, 1)", 
                }}
                onPress={() => onPress(photo)}
            >
                <ImageBackground
                    source={image 
                        ? require("../../assets/image/cameraAlt.png")
                        : require("../../assets/image/camera.png")}
                    style={styles.buttonImage}
                />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: "relative",

        marginBottom: 32,
    },
    containerImage: {
        marginBottom: 8,

        height: 240,

        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,
        overflow: "hidden",

        backgroundColor: "#F6F6F6",
    },
    image: {
        flex: 1,
    },
    button: {
        position: "absolute",
        top: 90,
        left: Dimensions.get("screen").width / 2 - 46,

        justifyContent: "center",
        alignItems: "center",

        height: 60,
        width: 60,

        borderRadius: 60,
        overflow: "hidden",
    },
    buttonImage: {
        height: 24,
        width: 24,
    },
    text: {
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18.75,
        color: "rgba(189, 189, 189, 1)",
    },
})