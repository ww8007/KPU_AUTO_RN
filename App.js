import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TextInput,
} from "react-native";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Apple from "react-native-vector-icons/AntDesign";
import Buttons from "./components/view/Buttons";
import { LinearGradient } from "expo-linear-gradient";
import image from "./components/view/good1.png";
import image2 from "./components/view/hi.png";
// axios 인스턴스 생성

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [id, onChangeText] = React.useState("");
  const [pw, onChangePw] = React.useState("");
  const [backGradient, onChangeGradient] = React.useState([
    {
      color: ["#00008C", "#3b5998", "#4c669f"],
    },
    {
      color: ["#000000", "#434343"],
    },
    {
      color: ["#000C40", "#F0F2F0"],
    },
    {
      color: ["#F0F2F0", "#000C40"],
    },
    {
      color: ["#000046", "#1CB5E0"],
    },
    {
      color: ["#16222A", "#3A6073"],
    },
    {
      color: ["#191654", "#43C6AC"],
    },
    {
      color: ["#43C6AC", "#191654"],
    },
    {
      color: ["#2ebf91", "#8360c3"],
    },
  ]);

  const [users, setUsers] = React.useState([
    {
      id: 1,
      duration: "1일 외박 신청",
      icon: "carrot",
      color: "black",
    },
    {
      id: 2,
      duration: "1주 외박 신청",
      icon: "seedling",
      color: "black",
    },
    {
      id: 3,
      duration: "2주 외박 신청",
      icon: "cannabis",
      color: "black",
    },
    {
      id: 4,
      duration: "한달 외박 신청",
      icon: "tint",
      color: "black",
    },
  ]);

  const [mode, onChangeMode] = React.useState("1");
  React.useEffect(() => {
    Alert.alert(
      "-주의사항-",
      "서버오류가 나올 시 KPU 홈페이지가 잘 동작 하는지 확인해주세요.",

      [{ text: "확인", onPress: () => console.log("ok") }],
      { cancelable: false }
    );
  }, []);

  const awaitSendRequest = () => {
    return new Promise((resolve, reject) => {
      // oneDay({ id, pw, mode }).then(function (response) {
      //   const { message } = JSON.parse(response.data.body);
      //   onChangeResult(message);
      //   resolve(message);
      // });
      onChangeResult("외박신청 완료");
      resolve("hi");
    });
  };

  return (
    <LinearGradient colors={backGradient[2].color} style={styles.container}>
      <SafeAreaView style={styles.items}>
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
            autoCompleteType="username"
            value={id}
            autoCapitalize="none"
            onChangeText={(id) => onChangeText(id)}
          />
        </View>
        <View style={styles.inputWithString}>
          <TextInput
            style={styles.inputString}
            defaultValue="PW : "
            placeholderTextColor="white"
          ></TextInput>
          <TextInput
            style={styles.inputIdPw}
            autoCompleteType="password"
            secureTextEntry={true}
            onChangeText={(pw) => onChangePw(pw)}
            value={pw}
          />
        </View>
        <View style={styles.blankView}></View>

        {users.map((user) => (
          <Buttons user={user} key={user.id}></Buttons>
        ))}
        <View style={styles.blankView}></View>
        <Image style={styles.stretch} source={image} />
        <Image style={styles.stretch2} source={image2} />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    flex: 1,
    marginHorizontal: 12,
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
    height: 40,
    color: "white",
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 0.5,
    marginRight: 15,
    paddingLeft: 10,
    flex: 8,
    marginBottom: 10,
  },
  stretch: {
    alignSelf: "flex-end",
    marginLeft: 10,
    flexDirection: "row-reverse",
    flex: 3,
    width: 50,
    height: 60,
    resizeMode: "stretch",
  },
  stretch2: {
    alignSelf: "center",
    resizeMode: "stretch",
    marginTop: -3,

    flex: 4,
    width: "120%",
    marginBottom: -40,
  },
  inputString: {
    flex: 1,
    paddingLeft: 13,

    color: "white",
  },
  blankView: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  inputWithString: {
    flexDirection: "row",
  },
});
