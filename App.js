import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./App.style";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Meditation",
    completed: false,
    color: "#FE938C",
  },
  {
    id: "2",
    title: "Coding",
    completed: false,
    color: "#9D8DF1",
  },
  {
    id: "3",
    title: "Journaling",
    completed: false,
    color: "#235789",
  },
];

export default function App() {
  const [items, setItems] = useState(DATA);
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addNewToDo = () => {
    let newToDo = {
      id: items.length + 1,
      title: text,
      completed: false,
      color: "#9EBC9E",
    };

    setItems([...items, newToDo]);
    setText("");
    setIsModalVisible(false);
  };

  const markItemCompleted = (item) => {
    const itemIndex = items.findIndex((i) => i.id === item.id);

    if (itemIndex >= 0) {
      const itemsToUpdate = [...items];
      itemsToUpdate[itemIndex] = { ...items[itemIndex], completed: true };
      setItems(itemsToUpdate);
    }
  };

  const Todoitem = (props) => (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: props.item.color }]}
      onPress={() => markItemCompleted(props.item)}
    >
      <Text
        style={
          props.item.completed ? styles.itemTextCompleted : styles.itemText
        }
      >
        {props.item.title}
      </Text>
    </TouchableOpacity>
  );

  const renderAddButton = () => {
    return (
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View style={styles.icon}>
          <Ionicons name="add" size={24} color="#652E00" />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
            />
            <Button title="Add To-do" onPress={addNewToDo} />
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => <Todoitem item={item} />}
        keyExtractor={(item) => item.id}
        ListFooterComponent={renderAddButton}
      />
    </SafeAreaView>
  );
}
