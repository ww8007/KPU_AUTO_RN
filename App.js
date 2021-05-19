import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
} from "react-native";
import axios from "axios";
import { oneDay } from "./lib/api/post";
import LoadingButton from "./Loading";
import AnimateLoadingButton from "react-native-animate-loading-button";
import ButtonSpinner from "react-native-button-spinner";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Apple from "react-native-vector-icons/AntDesign";
// axios 인스턴스 생성

const Separator = () => <View style={styles.separator} />;

function getHeader() {
  return fetch("https://reactnative.dev/movies.json")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

export default function App() {
  const [id, onChangeText] = React.useState("2015130035");
  const [pw, onChangePw] = React.useState("wy3227164!");
  const [result, onChangeResult] = React.useState("진행중...");
  const onSubmit = () => {
    oneDay({ id, pw }).then(function (response) {
      const { message } = JSON.parse(response.data.body);
      onChangeResult(message);
    });
  };
  const awaitSendRequest = () => {
    return new Promise((resolve, reject) => {
      oneDay({ id, pw }).then(function (response) {
        const { message } = JSON.parse(response.data.body);
        onChangeResult(message);
        resolve(message);
      });
    });
  };
  const sendRequest = () => {
    return new Promise(() => {});
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.blankView}></View>
        <Icons name="power-sleep" size={80} style={styles.title} />

        <View style={{ flex: 2 }}></View>
        <View style={styles.inputWithString}>
          <TextInput
            style={styles.inputString}
            defaultValue="I D  : "
          ></TextInput>
          <TextInput
            style={styles.inputIdPw}
            defaultValue="아이디"
            autoCompleteType="username"
            onChangeText={(text) => onChangeText(text)}
            value={id}
          />
        </View>
        <View style={styles.inputWithString}>
          <TextInput
            style={styles.inputString}
            defaultValue="PW : "
          ></TextInput>
          <TextInput
            style={styles.inputIdPw}
            defaultValue="아이디"
            autoCompleteType="username"
            secureTextEntry={true}
            onChangeText={(text) => onChangeText(text)}
            value={pw}
          />
        </View>
        <View style={styles.blankView}></View>
        {result === "외박신청 완료" ? (
          <ButtonSpinner onPress={awaitSendRequest}>
            <Apple name="checkcircle" size={20} color="black" />
            <Text style={{ color: "black" }}> 신청 완료</Text>
          </ButtonSpinner>
        ) : (
          <ButtonSpinner onPress={awaitSendRequest}>
            <Apple name="apple1" size={20} color="black" />
            <Text style={{ color: "black" }}> 하루 외박 신청</Text>
          </ButtonSpinner>
        )}
        <ButtonSpinner onPress={awaitSendRequest}>
          <Apple name="aliwangwang" size={20} color="black" />
          <Text style={{ color: "black" }}> 일주일 외박 신청</Text>
        </ButtonSpinner>
        <View style={styles.blankView}></View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
    color: "#FFD228",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputIdPw: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 11,
    paddingLeft: 10,
    flex: 8,
    marginBottom: 10,
  },
  inputString: {
    flex: 1,
  },
  blankView: {
    flex: 3,
  },
  inputWithString: {
    flexDirection: "row",
  },
});
