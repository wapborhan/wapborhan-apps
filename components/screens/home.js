import { React, Component } from "react";
import { WebView } from "react-native-webview";

export default class Home extends Component {
  render() {
    const uri = "https://code.wapborhan.com/appsite/";
    return <WebView source={{ uri }} />;
  }
}
