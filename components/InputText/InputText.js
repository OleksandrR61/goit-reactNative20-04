import { useState } from 'react';
import { TextInput, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

export default InputText = ({
    value,
    onChangeText,
    placeholder,
    keyboardType = "default",
    inputMode = "text",
    secureTextEntry = false,
    style,
}) => {
    const [ isFocus, setIsFocus ] = useState(false);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <TextInput
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                placeholder={placeholder}
                keyboardType={keyboardType}
                inputMode={inputMode}
                secureTextEntry={secureTextEntry}
                style={{
                    ...styles.input,
                    borderColor: isFocus
                        ? "#FF6C00"
                        : "#E8E8E8",
                    ...style
                }}
                placeholderTextColor={"#BDBDBD"}
                selectionColor={"#212121"}        
            />
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,

        marginBottom: 16,
        padding: 16,

        borderWidth: 1,
        borderRadius: 8,

        backgroundColor: "#F6F6F6",

        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18.75,
        color: "#212121",
    },
})