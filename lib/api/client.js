import axios from "axios";
import qs from "qs";
// axios 인스턴스 생성

const client = axios.create();

// // 글로벌 설정

// // API 주소 다른 곳 사용
client.defaults.baseURL =
  "https://0kmq7ofrb2.execute-api.ap-northeast-2.amazonaws.com/dev";
// client.defaults.withCredentials = true;
// client.withCredentials = true;

export default client;
