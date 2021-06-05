import client from "./client";
import qs from "qs";
export const oneDay = async ({ id, pw, mode }) => {
  let query = JSON.stringify({
    id: id,
    pw: pw,
    mode: mode,
  });
  return client.post("/con", query);
};

export const getDummy = async () => {
  return client.get("/1");
};
export const getDummy2 = async () => {
  return client.get("/1123123123");
};
