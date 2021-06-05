import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import ButtonSpinner from "react-native-button-spinner";
import Apple from "react-native-vector-icons/FontAwesome5";
import Apple2 from "react-native-vector-icons/AntDesign";
import { oneDay, getDummy, getDummy2 } from "../../lib/api/post";
export default function Buttons({ user, id, pw }) {
  const [result, onChangeResult] = React.useState("");
  const [error, onChangeError] = React.useState("");
  const [pressOk, onPressOk] = React.useState("");
  const awaitSendRequest = () => {
    return new Promise((resolve, reject) => {
      const mode = user.mode;
      if (id === "" || pw === "") {
        Alert.alert("ID와 PW를 입력해주세요");
        return resolve("no id or pw");
      }
      Alert.alert(
        user.duration,
        "신청하시겠습니까?",

        [
          {
            text: "취소",
            onPress: () => {
              return new Promise(function (res, rej) {
                res("good");
              }).then(function (response) {
                resolve("good");
              });
            },
            style: "cancel",
          },
          {
            text: "확인",
            onPress: () =>
              oneDay({ id, pw, mode })
                .then(function (response) {
                  let result = response.data.body;
                  const obj = JSON.parse(result);
                  if (obj.message === "외박신청 완료") {
                    onChangeResult("완료");
                  } else if (obj.message === "로그인 실패") {
                    onChangeError("로그인 실패");
                  } else {
                    onChangeError("서버 오류");
                    resolve(error);
                  }
                  resolve(response);
                })
                .catch(function (error) {
                  onChangeResult("완료");
                  resolve(error);
                }),
          },
        ],
        { cancelable: false }
      );
    });
  };
  const onChangeRe = () => {
    onChangeError("");
  };
  return (
    <>
      {result ? (
        <ButtonSpinner style={styles.buttonBorder} textButton={"Text Button"}>
          <Apple2
            name="checkcircleo"
            size={20}
            color="white"
            style={{ alignContent: "center" }}
          />
          <Text>{"  "}</Text>
          <Text style={{ color: "white" }}> 신청 완료</Text>
        </ButtonSpinner>
      ) : error ? (
        <ButtonSpinner
          style={styles.buttonBorder}
          textButton={"Text Button"}
          onPress={onChangeRe}
        >
          <Apple2
            name="closecircleo"
            size={20}
            color="white"
            style={{ alignContent: "center" }}
          />
          <Text>{"  "}</Text>
          <Text style={{ color: "white" }}>{error}</Text>
        </ButtonSpinner>
      ) : (
        <ButtonSpinner style={styles.buttonBorder} onPress={awaitSendRequest}>
          <Apple
            name={user.icon}
            size={20}
            color={user.color}
            style={{ alignContent: "center", opacity: 0.8 }}
          />
          <Text>{"  "}</Text>
          <Text style={{ color: "white" }}> {user.duration}</Text>
        </ButtonSpinner>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBorder: {
    color: "white",
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 0.7,
  },
});
