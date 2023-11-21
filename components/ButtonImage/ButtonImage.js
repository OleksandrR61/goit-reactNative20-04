import { TouchableOpacity, Image } from "react-native";

export default ButtonImage = ({
    isReady = true,
    image,
    onPress,
    style,
    styleImage,
}) => <TouchableOpacity
        onPress={() => isReady && onPress()}
        style={{
            ...style,
        }}
        disabled={!isReady}
    >
        <Image
            source={image}
            style={styleImage}
        />        
    </TouchableOpacity>;
