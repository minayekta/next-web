import http from './httpService';

export const CategoryGetParents = (body) => {

    return http.post(`${process.env.apiurl}/Category/GetParentsByLang`, JSON.stringify(body));
}
export const CategoryGetByPermalink = (body) => {

    return http.post(`${process.env.apiurl}/Category/GetByPermalink`, JSON.stringify(body));
}



export const CategoryGetAllWithChilds = (body) => {
    return http.post(`${process.env.apiurl}/Category/GetAllWithChildsByLang`, JSON.stringify(body));
}

export const CategoryGetById = (body) => {
    return http.post(`${process.env.serverSideApiUrl}/Category/GetByIdLang`, JSON.stringify(body));
}


export const CategoryGetByProductLang = (body) => {
    return http.post(`${process.env.apiurl}/Category/GetByProductLang`, JSON.stringify(body));
}


export const CategoryGetPermalinksByPermalinkDomain = (body) => {
    return http.post(`${process.env.serverSideApiUrl}/Category/GetPermalinksByPermalinkDomain`, JSON.stringify(body));
}
