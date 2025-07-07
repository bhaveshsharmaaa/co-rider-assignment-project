import Feather from "@expo/vector-icons/Feather";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const AttachmentOptions = () => {
  return (
    <View style={styles.btnBox}>
      <TouchableOpacity style={styles.btniItem}>
        <Feather name="camera" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btniItem}>
        <Feather name="video" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btniItem}>
        <Image
          source={require("./../../assets/images/fileIcon.png")}
          style={styles.fileIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default AttachmentOptions;
