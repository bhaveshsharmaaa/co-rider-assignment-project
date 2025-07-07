import Feather from "@expo/vector-icons/Feather";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const ChatHeader = ({ name }) => {
  return (
    <View style={styles.header}>
      <View style={styles.sub}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{name}</Text>
      </View>
      <TouchableOpacity>
        <Feather name="edit" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatHeader;
