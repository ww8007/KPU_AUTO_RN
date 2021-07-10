import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  TouchableHighlight,
} from 'react-native';
import ButtonSpinner from 'react-native-button-spinner';
import Apple from 'react-native-vector-icons/FontAwesome5';
import Apple2 from 'react-native-vector-icons/AntDesign';
import { oneDay, getDummy, getDummy2 } from '../../lib/api/post';
export default function Buttons({ user, id, pw }) {
  const [result, onChangeResult] = React.useState('');
  const [error, onChangeError] = React.useState('');
  const [pressOk, onPressOk] = React.useState('');
  const [modalVisible, setModalVisible] = useState({
    success: false,
    fail: false,
    server: false,
    visible: false,
  });
  const awaitSendRequest = () => {
    return new Promise((resolve, reject) => {
      const mode = user.mode;
      if (id === '' || pw === '') {
        Alert.alert('ID와 PW를 입력해주세요');
        return resolve('no id or pw');
      }
      Alert.alert(
        user.duration,
        '신청하시겠습니까?',
        [
          {
            text: '취소',
            onPress: () => {
              return new Promise(function (res, rej) {
                res('good');
              }).then(function (response) {
                resolve('good');
              });
            },
            style: 'cancel',
          },
          {
            text: '확인',
            onPress: () =>
              oneDay({ id, pw, mode })
                .then(function (response) {
                  let result = response.data.body;
                  const obj = JSON.parse(result);
                  if (obj.message === '외박신청 완료') {
                    setModalVisible({
                      success: true,
                      fail: false,
                      visible: true,
                      server: false,
                    });
                    onChangeResult('완료');
                  } else if (obj.message === '로그인 실패') {
                    setModalVisible({
                      success: false,
                      fail: true,
                      visible: true,
                      server: false,
                    });
                    // Alert.alert(
                    //   '로그인이 실패하였습니다. 아이디와 비밀번호를 확인해주세요'
                    // );
                    onChangeError('로그인 실패');
                  } else {
                    setModalVisible({
                      success: false,
                      fail: true,
                      visible: true,
                      server: false,
                    });
                    onChangeError('서버 오류');
                    resolve(error);
                  }
                  resolve(response);
                })
                .catch(function (error) {
                  setModalVisible({
                    success: false,
                    fail: false,
                    visible: true,
                    server: true,
                  });
                  onChangeError('서버 오류');
                  resolve(error);
                }),
          },
        ],
        { cancelable: false }
      );
    });
  };
  const onChangeRe = () => {
    onChangeError('');
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible.visible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {modalVisible.success && (
              <Text style={styles.modalText}>외박신청 완료</Text>
            )}
            {modalVisible.fail && (
              <Text style={styles.modalText}>로그인 실패</Text>
            )}
            {modalVisible.server && (
              <Text style={styles.modalText}>서버 오류</Text>
            )}

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(
                  {
                    fail: false,
                    success: false,
                    server: false,
                    visible: false,
                  },
                  onChangeRe()
                );
              }}
            >
              <Text style={styles.textStyle}>확인</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      {console.log(modalVisible)}
      {/* <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight> */}
      {result ? (
        <ButtonSpinner style={styles.buttonBorder} textButton={'Text Button'}>
          <Apple2
            name="checkcircleo"
            size={17}
            color="white"
            style={{ alignContent: 'center' }}
          />
          <Text>{'  '}</Text>
          <Text style={{ color: 'white' }}> 신청 완료</Text>
        </ButtonSpinner>
      ) : error ? (
        <ButtonSpinner
          style={styles.buttonBorder}
          textButton={'Text Button'}
          onPress={onChangeRe}
        >
          <Apple2
            name="closecircleo"
            size={17}
            color="white"
            style={{ alignContent: 'center' }}
          />
          <Text>{'  '}</Text>
          <Text style={{ color: 'white' }}>{error}</Text>
        </ButtonSpinner>
      ) : (
        <ButtonSpinner style={styles.buttonBorder} onPress={awaitSendRequest}>
          <Apple
            name={user.icon}
            size={17}
            color={user.color}
            style={{ alignContent: 'center', opacity: 0.8 }}
          />
          <Text>{'  '}</Text>
          <Text style={{ color: 'white' }}> {user.duration}</Text>
        </ButtonSpinner>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBorder: {
    color: 'white',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 0.7,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 80,

    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    paddingLeft: 60,
    paddingRight: 60,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,

    textAlign: 'center',
  },
});
