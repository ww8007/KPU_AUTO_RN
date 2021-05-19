import client from "./client";
import qs from "qs";
export const oneDay = async ({ id, pw }) => {
  console.log({ id, pw });
  let query = JSON.stringify({
    id: id,
    pw: pw,
  });
  return client.post("/con", query);
};
