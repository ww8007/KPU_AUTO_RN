import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
   return (
      <>
         {result ? (
            <ButtonSpinner textButton={"Text Button"}>
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
            <ButtonSpinner textButton={"Text Button"} onPress={onChangeRe}>
               <Apple2
                  name="closecircleo"
                  size={20}
                  color="white"
                  style={{ height: "120%", marginBottom: 2 }}
               />
               <Text>{"  "}</Text>
               <Text style={{ color: "white" }}>서버 오류</Text>
            </ButtonSpinner>
         ) : (
            <ButtonSpinner onPress={awaitSendRequest}>
               <Apple
                  name={user.icon}
                  size={20}
                  color={user.color}
                  style={{ height: "120%", marginBottom: 2 }}
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
});
