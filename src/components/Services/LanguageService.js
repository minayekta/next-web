import http from './httpService';

export const DomainGetByName = () => {
    const body = {
        "text":process.env.domain
    }
    return http.post(`${process.env.apiurl}/Domain/GetByName`, JSON.stringify(body))
}


export const ContinentGetByDomain = () => {
    const body = {
        "text":process.env.domain
    }
    return http.post(`${process.env.apiurl}/Continent/GetByDomain`, JSON.stringify(body))
}

export const GetTranslate = () => {
    // const body = {
    //     "text":process.env.domain
    // }
    return http.get(`https://localhost:44301/api/Translates`)
}
