import * as React from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function DrowerHeader(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#ff014f" }}
      >
        <ImageBackground
          // source={require("../../assets/wblogo.png")}
          style={styles.container}
        >
          <Image
            source={require("../../assets/wblogo.png")}
            style={styles.logo}
          />
          <Text style={styles.text}>WapBorhan</Text>
        </ImageBackground>
        <View style={{ backgroundColor: "#fff", padding: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 180,
    height: 180,
  },
  text: {
    color: "#fff",
    // fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
});
