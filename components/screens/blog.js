import { React, Component } from "react";
import { WebView } from "react-native-webview";

export default class Blog extends Component {
  render() {
    const uri = "https://blog.wapborhan.com";
    return <WebView source={{ uri }} />;
  }
}
