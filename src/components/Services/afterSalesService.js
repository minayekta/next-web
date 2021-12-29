import http from './httpService';
import config from './config.json';
export const AfterSaleApiGetAll = async (body) => {
    return http.post(`https://api1.ronixtools.com/api/AfterSale/GetAll`, JSON.stringify(body));
}
export const AfterSaleApiSearch = async (body) => {
    return http.post(`https://api1.ronixtools.com/api/AfterSale/Search`, JSON.stringify(body));
}
export const RonixAgentsProvinceGetAll = async (body) => {
    return http.get(`https://ei.ronix.ir:4488/RonixAgentsProvinceGetAll/v1`);
}
export const AfterSaleGetAllTypes = async (body) => {
    return http.post(`https://api1.ronixtools.com/api/AfterSale/GetAllTypes`);
}
