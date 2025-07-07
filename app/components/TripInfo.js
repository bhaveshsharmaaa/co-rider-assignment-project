import Feather from "@expo/vector-icons/Feather";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const TripInfo = ({ from, to, show, setShow }) => {
  return (
    <View style={styles.tripContainer}>
      <View style={styles.tripLeft}>
        <Image
          style={styles.avatar}
          source={require("./../../assets/images/group.png")}
        />
        <View style={styles.locationText}>
          <Text style={styles.fromText}>
            From <Text style={styles.bold}>{from}</Text>
          </Text>
          <Text style={styles.fromText}>
            To <Text style={styles.bold}>{to}</Text>
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => setShow(!show)}>
        <Feather name="more-vertical" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default TripInfo;
