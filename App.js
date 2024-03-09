import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  FlatList,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Meditation",
  },
  {
    id: "2",
    title: "Coding",
  },
  {
    id: "3",
    title: "Journaling",
  },
];

const Todoitem = (props) => (
  <View>
    <Text>{props.item.title}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sarah Goewey</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} />
      <Button title="start" onPress={() => Alert.alert("Button pressed")} />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Todoitem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderColor: "gray",
  },
});
