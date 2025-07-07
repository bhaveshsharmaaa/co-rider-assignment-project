import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const MessageInput = ({ btnOptions, setBtnOptions }) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.textInput}
        placeholder="Type a message..."
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity
        onPress={() => setBtnOptions(!btnOptions)}
        style={styles.iconButton}
      >
        <Image
          source={require("./../../assets/images/feather.png")}
          style={styles.fileIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Image
          source={require("./../../assets/images/send.png")}
          style={styles.fileIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default MessageInput;
