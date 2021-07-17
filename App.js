import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TextInput,
  Linking,
} from 'react-native';

import ButtonSpinner from 'react-native-button-spinner';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Apple from 'react-native-vector-icons/FontAwesome5';
import Buttons from './components/view/Buttons';
import { LinearGradient } from 'expo-linear-gradient';
import image from './components/view/good1.png';
import image2 from './components/view/hi.png';

// axios 인스턴스 생성

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [id, onChangeText] = React.useState('');
  const [pw, onChangePw] = React.useState('');
  const [backGradient, onChangeGradient] = React.useState([
    {
      color: ['#00008C', '#3b5998', '#4c669f'],
    },
    {
      color: ['#1b2735', '0%', '#090a0f'],
    },
    {
      color: ['#000C40', '#F0F2F0'],
    },
    {
      color: ['#F0F2F0', '#000C40'],
    },
    {
      color: ['#000046', '#1CB5E0'],
    },
    {
      color: ['#16222A', '#3A6073'],
    },
    {
      color: ['#191654', '#43C6AC'],
    },
    {
      color: ['#43C6AC', '#191654'],
    },
    {
      color: ['#2ebf91', '#8360c3'],
    },
  ]);

  const [users, setUsers] = React.useState([
    {
      mode: 1,
      duration: '1일 외박 신청',
      icon: 'cannabis',
      color: '#FF4646',
    },
    {
      mode: 2,
      duration: '1주 외박 신청',
      icon: 'carrot',
      color: '#E56D29',
    },
    {
      mode: 3,
      duration: '2주 외박 신청',
      icon: 'seedling',
      color: 'green',
    },
    {
      mode: 4,
      duration: '한달 외박 신청',
      icon: 'tint',
      color: '#00E1FF',
    },
  ]);

  const [mode, onChangeMode] = React.useState('1');
  React.useEffect(() => {
    Alert.alert(
      '-Notice-',
      '1. 한 달 외박 신청시 시간제한으로 인해 완료 메시지가 안뜨는 경우가 있습니다.(오류로 표현)\n  2. 24 : 00 ~ 01 : 00 까지 통정시가 열리지 않으므로 이 시간대를 피해서 신청해주세요! ',

      [{ text: '확인' }],
      { cancelable: false }
    );
  }, []);

  // const awaitSendRequest = () => {
  //   return new Promise((resolve, reject) => {
  //     // oneDay({ id, pw, mode }).then(function (response) {
  //     //   const { message } = JSON.parse(response.data.body);
  //     //   onChangeResult(message);
  //     //   resolve(message);
  //     // });
  //     onChangeResult('외박신청 완료');
  //     resolve('hi');
  //   });
  // };
  const onClickMessageToMe = () => {
    Linking.openURL('https://open.kakao.com/o/sA4uughd');
  };
  const onClickToSurvey = () => {
    Linking.openURL('http://naver.me/GKoSugrJ');
  };
  return (
    <LinearGradient colors={backGradient[2].color} style={styles.container}>
      <SafeAreaView style={styles.items}>
        <View style={styles.blankView}></View>
        <Icons name="power-sleep" size={80} style={styles.title} />
        <View style={{ flex: 2 }}></View>
        <View style={styles.inputWithString}>
          <Text style={[styles.inputString, { marginTop: 13 }]}>I D :</Text>
          <TextInput
            style={styles.inputIdPw}
            autoCompleteType="username"
            editable={true}
            value={id}
            autoCapitalize="none"
            onChangeText={(id) => onChangeText(id)}
          />
        </View>
        <View style={styles.inputWithString}>
          <Text style={[styles.inputString, { marginTop: 13 }]}>PW :</Text>
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
          <Buttons user={user} key={user.mode} id={id} pw={pw}></Buttons>
        ))}

        <ButtonSpinner
          style={styles.buttonBorder}
          textButton={'Text Button'}
          onPress={onClickMessageToMe}
        >
          <Apple
            name="comment-alt"
            size={17}
            color="black"
            style={{ alignContent: 'center' }}
          />
          <Text>{'  '}</Text>
          <Text style={{ color: 'white' }}>개발자 건의사항</Text>
        </ButtonSpinner>
        <ButtonSpinner
          style={styles.buttonBorder}
          textButton={'Text Button'}
          onPress={onClickToSurvey}
        >
          <Apple
            name="check"
            size={17}
            color="black"
            style={{ alignContent: 'center' }}
          />
          <Text>{'  '}</Text>
          <Text style={{ color: 'white' }}>설문 조사</Text>
        </ButtonSpinner>
        <Image
          onClick={onClickToSurvey}
          style={styles.stretch}
          source={image}
        />
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
    textAlign: 'center',
    marginVertical: 8,
    color: '#FFD228',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputIdPw: {
    height: 40,
    color: 'white',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 0.5,
    marginRight: 15,
    paddingLeft: 10,
    flex: 8,
    marginBottom: 10,
  },
  stretch: {
    alignSelf: 'flex-end',
    marginLeft: 10,
    flexDirection: 'row',
    flex: 3,
    width: 50,
    height: 60,
    resizeMode: 'stretch',
  },
  stretch2: {
    alignSelf: 'center',
    resizeMode: 'stretch',
    marginTop: -3,

    flex: 4,
    width: '120%',
    marginBottom: -40,
  },
  inputString: {
    flex: 1,
    paddingLeft: 13,

    color: 'white',
  },
  blankView: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  inputWithString: {
    flexDirection: 'row',
  },
  buttonBorder: {
    color: 'white',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 0.7,
  },
});
