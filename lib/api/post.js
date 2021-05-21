import client from "./client";
import qs from "qs";
export const oneDay = async ({ id, pw, mode }) => {
  console.log({ id, pw });
  let query = JSON.stringify({
    id: id,
    pw: pw,
    mode: mode,
  });
  return client.post("/con", query);
};

export const getDummy = async () => {
  return client.get("/employees");
};
