import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello world</Text>
      <StatusBar style="auto" />
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image
          fadeDuration={1000}
          //blurRadius={10}
          source={{
            height: 300,
            width: 200,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      {/* <Image source={require("./assets/icon.png")} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
