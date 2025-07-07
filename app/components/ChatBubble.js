import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const ChatBubble = ({ item }) => {
  const isSelf = item.sender.self;

  return (
    <View
      style={{
        flexDirection: isSelf ? "row-reverse" : "row",
        alignItems: "flex-start",
        marginBottom: 16,
      }}
    >
      {!isSelf && (
        <View style={styles.avatarWrapper}>
          <Image source={{ uri: item.sender.image }} style={styles.dpImage} />
          {item.sender.is_kyc_verified && (
            <Image
              source={require("./../../assets/images/check.png")}
              style={styles.verifiedIcon}
            />
          )}
        </View>
      )}
      <View
        style={[
          {
            backgroundColor: isSelf ? "#3777f0" : "#fff",
            padding: 12,
            maxWidth: "75%",
            borderTopLeftRadius: isSelf ? 18 : 4,
            borderTopRightRadius: 18,
            borderBottomLeftRadius: 18,
            borderBottomRightRadius: isSelf ? 4 : 18,
          },
          !isSelf && styles.receiverShadow,
        ]}
      >
        <Text
          style={{
            color: isSelf ? "#fff" : "#606060",
            fontFamily: "inter-medium",
            fontSize: 14,
          }}
        >
          {item.message}
        </Text>
      </View>
    </View>
  );
};

export default ChatBubble;
