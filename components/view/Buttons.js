import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonSpinner from "react-native-button-spinner";
import Apple from "react-native-vector-icons/AntDesign";
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
   return (
      <>
         {result ? (
            <ButtonSpinner textButton={"Text Button"}>
               <Apple name="checkcircle" size={20} color="black" />
               <Text style={{ color: "black" }}> 신청 완료</Text>
            </ButtonSpinner>
         ) : error ? (
            <ButtonSpinner textButton={"Text Button"}>
               <Apple name="checkcircle" size={20} color="black" />
               <Text style={{ color: "black" }}>서버 오류</Text>
            </ButtonSpinner>
         ) : (
            <ButtonSpinner onPress={awaitSendRequest}>
               <Apple name="checkcircle" size={20} color="black" />
               <Text style={{ color: "black" }}> {user.duration}</Text>
            </ButtonSpinner>
         )}
         {result}
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
