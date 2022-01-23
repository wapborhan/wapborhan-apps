import { React, Component } from "react";
import { WebView } from "react-native-webview";

export default class Project extends Component {
  render() {
    const uri = "https://code.wapborhan.com";
    return <WebView source={{ uri }} style={{ marginTop: 25 }} />;
  }
}
