import http from './httpService';
import getConfig from 'next/config'
import { env,apiurl } from "../../../next.config";
const { serverRuntimeConfig } = getConfig()
export const ContactInsert = (body) => {
    return http.post(`${env.apiurl}/Contact/Insert`, JSON.stringify(body)

    );
}

export const GetMainMenu = (body) => {
    return http.post(`${env.apiurl}/Menu/GetMenuByName`, JSON.stringify(body));
}

export const GetMenuByNameWithColumns = (body) => {
    console.log(body);
    return http.post(`${env.apiurl}/Menu/GetMenuByNameWithColumns`, JSON.stringify(body));
}