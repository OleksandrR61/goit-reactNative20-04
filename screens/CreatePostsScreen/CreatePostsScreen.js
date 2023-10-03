import { useState, useEffect } from "react";
import { View, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";

import { InputPhoto, InputText, ButtonPrimary } from "../../components";

const mapPin = require("../../assets/image/mapPin.png");
const trash = require("../../assets/image/trash.png");

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

    const handleClear = () => {
        setImg(null);
        setName("");
        setLocation("");
    };

    return (
        <View style={{flex: 1}}>
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
            />
        </View>
        <View
            style={styles.containerTrash}
        >
            <TouchableOpacity
                style={styles.buttonTrash}
                onPress={handleClear}
            >
                <ImageBackground
                    source={trash}
                    style={styles.imageTrash}
                />
            </TouchableOpacity>
        </View>
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
    containerTrash: {
        height: 71,

        paddingTop: 9,
    },
    buttonTrash: {
        height: 40,
        width: 70,

        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",

        backgroundColor: "#F6F6F6",

        borderRadius: 20,
    },
    imageTrash: {
        height: 24,
        width: 24,
    }
})