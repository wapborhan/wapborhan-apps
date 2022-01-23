import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrowerHeader from "../drawer/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./home";
import Blog from "./blog";
import Project from "./project";
import Apps from "./app";
import Admin from "./developer";

import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

function HomeScreen() {
  return <Home />;
}
function BlogScreen() {
  return <Blog />;
}
function ProjectScreen() {
  return <Project />;
}
function AppsScreen() {
  return <Apps />;
}
function DeveloperScreen() {
  return <Admin />;
}

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrowerHeader {...props} />}
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          drawerLabelStyle: { marginLeft: -25 },
          drawerActiveBackgroundColor: "#ff014f",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Blog"
          component={BlogScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="images-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Project"
          component={ProjectScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="code-slash-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="More Apps"
          component={AppsScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="phone-portrait-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About Developer"
          component={DeveloperScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
