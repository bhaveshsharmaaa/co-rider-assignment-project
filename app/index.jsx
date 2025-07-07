import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";

import AttachmentOptions from "./components/AttachmentOptions";
import ChatBubble from "./components/ChatBubble";
import ChatHeader from "./components/ChatHeader";
import MessageInput from "./components/MessageInput";
import OptionsDropdown from "./components/OptionsDropdown";
import { styles } from "./components/styles";
import TripInfo from "./components/TripInfo";

const Index = () => {
  const [show, setShow] = useState(false);
  const [btnOptions, setBtnOptions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchChats(0);
  }, []);

  const fetchChats = async (newPage) => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://qa.corider.in/assignment/chat?page=${newPage}`
      );
      const data = await response.json();

      if (newPage === 0) {
        setChats(data);
      } else {
        setChats((prev) => ({
          ...prev,
          chats: [...(prev?.chats || []), ...data.chats],
        }));
        if (data.chats.length === 0) {
          setHasMore(false);
        }
      }
      setPage(newPage);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !chats) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <ChatHeader name={chats?.name} />

      <TripInfo
        from={chats?.from}
        to={chats?.to}
        show={show}
        setShow={setShow}
      />
      {show && <OptionsDropdown />}

      <FlatList
        data={chats?.chats || []}
        inverted
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        onEndReached={() => fetchChats(page + 1)}
        onEndReachedThreshold={0.3}
        renderItem={({ item }) => <ChatBubble item={item} />}
      />
      <MessageInput btnOptions={btnOptions} setBtnOptions={setBtnOptions} />
      {btnOptions && <AttachmentOptions />}
    </SafeAreaView>
  );
};

export default Index;
