import http from './httpService';
export const getGeoInfo  = () => {
    return http.get('https://ipapi.co/json/');
}




export const ContinentGetUserIp = () => {
   
    return http.post(`${process.env.apiurl}/Continent/GetUserIp`)
}

export const ContinentGetUserLocation = (body) => {
   
    return http.post(`${process.env.apiurl}/Continent/GetUserLocation`, JSON.stringify(body))
}

