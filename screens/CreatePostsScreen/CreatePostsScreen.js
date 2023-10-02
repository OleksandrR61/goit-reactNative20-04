import { useState, useEffect } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

import { InputPhoto, InputText, ButtonPrimary } from "../../components";

const mapPin = require("../../assets/image/mapPin.png");

export default CreatePostsScreen = () => {
    const [ img, setImg ] = useState(null);
    const [ name, setName ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ isReady, setIsReady ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        if (img && name && location) {
            setIsReady(true);
        } else {
            setIsReady(false);
        };
    }, [img, name, location]);

    return (
        <View
            style={styles.container}
        >
            <InputPhoto
                image={img}
                onPress={setImg}
            />

            <InputText
                value={name}
                onChangeText={setName}
                placeholder="Назва..."
                style={{
                    ...styles.inputText,
                    ...styles.inputTextName
                }}
            />

            <View
                style={styles.containerInput}
            >
                <InputText
                    value={location}
                    onChangeText={setLocation}
                    placeholder="Місцевість..."
                    style={{
                        ...styles.inputText,
                        ...styles.inputTextLocation
                    }}
                />

                <ImageBackground
                    source={mapPin}
                    style={styles.imageMapPin}
                />
            </View>

            <ButtonPrimary
                isReady={isReady}
                title={isLoading
                    ? "Очікуйте..."
                    : "Опубліковати"
                }
                onPress={() => console.log("Hello")}
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 32,

        backgroundColor: "#FFFFFF",
    },
    inputText: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderRadius: 0,
        borderColor: "#E8E8E8",

        backgroundColor: "transparent",
    },
    inputTextName: {
        paddingLeft: 0,

        fontFamily: "Roboto-Medium",
        fontWeight: "500",        
    },
    inputTextLocation: {
        paddingLeft: 28,
    },
    containerInput: {
        position: "relative",

        marginBottom: 32,
    },
    imageMapPin: {
        position: "absolute",
        top: 13,

        height: 24,
        width: 24,
    },
    button: {
        marginBottom: 111,
    },
})