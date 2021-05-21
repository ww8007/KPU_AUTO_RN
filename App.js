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
import { oneDay, getDummy } from "./lib/api/post";
import LoadingButton from "./Loading";
import AnimateLoadingButton from "react-native-animate-loading-button";
import ButtonSpinner from "react-native-button-spinner";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Apple from "react-native-vector-icons/AntDesign";
import Buttons from "./components/view/Buttons";
// axios 인스턴스 생성

const Separator = () => <View style={styles.separator} />;

export default function App() {
   const [id, onChangeText] = React.useState("2015130035");
   const [pw, onChangePw] = React.useState("wy3227164!");
   const [users, setUsers] = React.useState([
      {
         id: 1,
         duration: "1주 외박 신청",
      },
      {
         id: 2,
         duration: "2주 외박 신청",
      },
      {
         id: 3,
         duration: "한 달 외박 신청",
      },
   ]);
   const [mode, onChangeMode] = React.useState("1");

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
                  autoCompleteType="username"
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
                  autoCompleteType="password"
                  secureTextEntry={true}
                  onChangeText={(text) => onChangeText(text)}
                  value={pw}
               />
            </View>
            <View style={styles.blankView}></View>
            {users.map((user) => (
               <Buttons user={user} key={user.id}></Buttons>
            ))}
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
