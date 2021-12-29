import http from './httpService';
import config from './config.json';
import { env } from "../../../next.config";

export const FooterGetFooterByName = async (data) => {
    return http.post(`https://api1.ronixtools.com/api/Footer/GetFooterByName`,
        JSON.stringify(data))
}