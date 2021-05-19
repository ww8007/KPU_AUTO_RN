import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AnimateLoadingButton from "react-native-animate-loading-button";

export default class LoadingButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimateLoadingButton
          ref={(c) => (this.loadingButton1 = c)}
          width={300}
          height={50}
          title="BUTTON 1"
          titleFontSize={16}
          titleColor="rgb(255,255,255)"
          backgroundColor="rgb(29,18,121)"
          borderRadius={4}
          onPress={this._onPressBotton1Handler.bind(this)}
        />

        <View style={{ height: 20 }} />

        <AnimateLoadingButton
          ref={(c) => (this.loadingButton2 = c)}
          width={300}
          height={50}
          title="BUTTON 2"
          titleFontSize={16}
          titleColor="rgb(255,255,255)"
          backgroundColor="rgb(29,18,121)"
          borderRadius={4}
          onPress={this._onPressBotton2Handler.bind(this)}
        />
      </View>
    );
  }

  _onPressBotton1Handler() {
    this.loadingButton1.showLoading(true);
    // mock
    setTimeout(() => {
      this.loadingButton1.showLoading(false);
    }, 2000);
  }

  _onPressBotton2Handler() {
    this.loadingButton2.showLoading(true);
    // mock
    setTimeout(() => {
      this.loadingButton2.showLoading(false);
    }, 2000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    justifyContent: "center",
  },
});
