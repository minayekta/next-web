import http from "./httpService";
import config from "./config.json";
import { env } from "../../../next.config";
export const SendMail = async (body) => {
  return http.post(
    `${config.apiurl}/api/Contact/SendMailIR`,
    JSON.stringify(body),
    {
      headers: {
        "Accept-language": `ir`,
      },
    }
  );
};

export const ContinentGetAll = async (body) => {
  return http.post(
    `${process.env.apiurl}/Continent/GetAll`,
    JSON.stringify(body),
    {
      headers: {
        "Accept-language": `ir`,
      },
    }
  );
};

