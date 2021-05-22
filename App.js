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
import axios from "axios";
import { oneDay, getDummy } from "./lib/api/post";
import LoadingButton from "./Loading";
import AnimateLoadingButton from "react-native-animate-loading-button";
import ButtonSpinner from "react-native-button-spinner";
import Icon from "react-native-vector-icons/AntDesign";
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
   const [users, setUsers] = React.useState([
      {
         id: 1,
         duration: "1일 외박 신청",
         icon: "codesquare",
      },
      {
         id: 2,
         duration: "1주 외박 신청",
         icon: "qrcode",
      },
      {
         id: 3,
         duration: "2주 외박 신청",
         icon: "folder1",
      },
      {
         id: 4,
         duration: "한 달 외박 신청",
         icon: "apple1",
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
      <LinearGradient
         colors={["#192f6a", "#3b5998", "#4c669f"]}
         style={styles.container}
      >
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

            <Image style={styles.stretch} source={image} />
            <Image style={styles.stretch2} source={image2} />

            {users.map((user) => (
               <Buttons user={user} key={user.id}></Buttons>
            ))}
            <View style={styles.blankView}></View>
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
      height: 50,
      color: "white",
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 11,
      paddingLeft: 10,
      flex: 8,
      marginBottom: 10,
   },
   stretch: {
      alignSelf: "flex-end",
      marginLeft: 30,
      flexDirection: "row-reverse",
      flex: 2,
      width: 60,
      height: 70,
      resizeMode: "stretch",
   },
   stretch2: {
      alignSelf: "center",
      resizeMode: "stretch",

      flex: 4,
      width: "95%",
   },
   inputString: {
      flex: 1,
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
