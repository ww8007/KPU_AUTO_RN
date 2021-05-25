import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import ButtonSpinner from "react-native-button-spinner";
import Apple from "react-native-vector-icons/FontAwesome5";
import Apple2 from "react-native-vector-icons/AntDesign";
import { oneDay, getDummy, getDummy2 } from "../../lib/api/post";
export default function Buttons({ user }) {
  const [result, onChangeResult] = React.useState("");
  const [error, onChangeError] = React.useState("");
  const awaitSendRequest = () => {
    return new Promise((resolve, reject) => {
      getDummy2()
        .then(function (response) {
          onChangeResult("완료");
          resolve(response);
        })
        .catch(function (error) {
          onChangeError("실패");
          resolve(error);
        });
    });
  };
  const onChangeRe = () => {
    onChangeError("");
  };
  const createTwoButtonAlert = () =>
    Alert.alert(
      user.duration,
      "신청하시겠습니까?",

      [
        {
          text: "취소",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "확인", onPress: () => awaitSendRequest() },
      ],
      { cancelable: false }
    );
  return (
    <>
      {result ? (
        <ButtonSpinner style={styles.buttonBorder} textButton={"Text Button"}>
          <Apple2
            name="checkcircleo"
            size={20}
            color="white"
            style={{ height: "120%", marginBottom: 2 }}
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
            style={{ height: "120%", marginBottom: -2 }}
          />
          <Text>{"  "}</Text>
          <Text style={{ color: "white" }}>서버 오류</Text>
        </ButtonSpinner>
      ) : (
        <ButtonSpinner style={styles.buttonBorder} onPress={awaitSendRequest}>
          <Apple
            name={user.icon}
            size={20}
            color={user.color}
            style={{ height: "120%", marginBottom: -2, opacity: 0.8 }}
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
