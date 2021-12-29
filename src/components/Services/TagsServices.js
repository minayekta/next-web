import http from './httpService';
import { env } from "../../../next.config";


// export const ProductGetAllTags = async (data) => {
//     return http.post(`${process.env.apiurl}/Product/GetAllTag`,
//         JSON.stringify(data)
//     )
// }
export const ProductGetAllTags = async (data) => {
    return http.post(`${env.serverSideApiUrl}/Product/GetAllTag`,
        JSON.stringify(data)
    )
}
// export const ProductGetTagByPermalink = async (data) => {
//     return http.post(`${process.env.serverSideApiUrl}/Product/GetTagByPermalink`,
//         JSON.stringify(data)
//     )
// }
export const ProductGetTagByPermalink = async (data) => {
    return http.post(`${env.serverSideApiUrl}/Product/GetTagByPermalink`,
        JSON.stringify(data)
    )
}
