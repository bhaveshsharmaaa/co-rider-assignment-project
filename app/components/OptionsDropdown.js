import Feather from "@expo/vector-icons/Feather";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const OptionsDropdown = () => {
  return (
    <View style={styles.dropdownWrapper}>
      <View style={styles.optionBox}>
        <TouchableOpacity style={styles.item}>
          <Feather name="users" size={18} color="black" />
          <Text style={styles.text}>Members</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Feather name="phone" size={18} color="black" />
          <Text style={styles.text}>Share Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Feather name="message-square" size={18} color="black" />
          <Text style={styles.text}>Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OptionsDropdown;
