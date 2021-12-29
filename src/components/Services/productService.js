import http from "./httpService";

import getConfig from "next/config";
import config from "./config.json";
import { env } from "../../../next.config";
import axios from "axios";
export const searchProduct = (text) => {
  // return http.post(`http://172.16.213.66:8000/api/clientapi/searchkala`,JSON.stringify(text));
  return http.post(
    `https://ei.ronix.ir:4488/RonixAgentsSearchKala/v1`,
    JSON.stringify(text),
    {
      headers: {
        Authorization: `bearer 1C06FAEDA16249C1C464126DBD593D50A183242E0BD26F6B865985EF37433C45`,
      },
    }
  );
};

export const GetByLangPaged = (body) => {
  // return http.post(`http://172.16.213.66:8000/api/clientapi/searchkala`,JSON.stringify(text));
  return http.post(
    `${process.env.apiurl}/Product/GetByLangPaged`,
    JSON.stringify(body)
  );
};

export const ProductGetActiveByLangPaged = (body) => {
  // return http.post(`http://172.16.213.66:8000/api/clientapi/searchkala`,JSON.stringify(text));
  return http.post(
    `${process.env.apiurl}/Product/GetActiveByLangPaged`,
    JSON.stringify(body)
  );
};

export const ProductGetAttrByProductLang = (body) => {
  // return http.post(`http://172.16.213.66:8000/api/clientapi/searchkala`,JSON.stringify(text));
  return http.post(
    `${process.env.apiurl}/Product/GetAttrByProductLang`,
    JSON.stringify(body)
  );
};
export const ProductGetSimilarByProductLang = (body) => {
  // return http.post(`http://172.16.213.66:8000/api/clientapi/searchkala`,JSON.stringify(text));
  return http.post(
    `${process.env.apiurl}/Product/GetSimilarByProductLang`,
    JSON.stringify(body)
  );
};

export const ProductGetActiveSimilarByProductLang = (body) => {
  // return http.post(`http://172.16.213.66:8000/api/clientapi/searchkala`,JSON.stringify(text));
  return http.post(
    `${process.env.serverSideApiUrl}/Product/GetActiveSimilarByProductLang`,
    JSON.stringify(body)
  );
};

export const ProductGetLatestByLang = (body) => {
  return http.post(
    `${process.env.apiurl}/Product/GetLatestByLangPaged`,
    JSON.stringify(body)
  );
};
export const ProductGetActiveLatestByLang = (body) => {
  return http.post(
    `${process.env.apiurl}/Product/GetLatestActiveByLangPaged`,
    JSON.stringify(body)
  );
};
export const ProductGetByCategoryLangPaged = (body) => {
  return http.post(
    `${process.env.apiurl}/Product/GetByCategoryLangPaged`,
    JSON.stringify(body)
  );
};

export const ProductGetActiveByCategoryLangPaged = (body) => {
  return http.post(
    `${process.env.apiurl}/Product/GetActiveByCategoryLangPaged`,
    JSON.stringify(body)
  );
};
export const ProductGetByCategoryPermalinkLangPaged = (body) => {
  return http.post(
    `${process.env.apiurl}/Product/GetByCategoryPermalinkLangPaged`,
    JSON.stringify(body)
  );
};

export const ProductGetActiveByCategoryPermalinkLangPaged = (body) => {
  return http.post(
    `${process.env.serverSideApiUrl}/Product/GetActiveByCategoryPermalinkLangPaged`,
    JSON.stringify(body)
  );
};

export const ProductGetFeaturesByProductLang = (body) => {
  return http.post(
    `${process.env.apiurl}/Product/GetFeaturesByProductLang`,
    JSON.stringify(body)
  );
};
export const SearchFull = (body) => {
  return http.post(
    `${process.env.serverSideApiUrl}/Product/SearchFullActive`,
    JSON.stringify(body)
  );
};
export const ProductGetReviewsByIdPaged = (body) => {
  return http.post(
    `${process.env.apiurl}/Product/GetReviewsByIdPaged`,
    JSON.stringify(body)
  );
  // return axios.post(`${process.env.apiurl}/Product/GetReviewsByIdPaged`, JSON.stringify(body));
};
export const ProductInsertReview = (body) => {
  return http.post(
    `${process.env.apiurl}/Product/InsertReview`,
    JSON.stringify(body)
  );
};
export const ProductSearch = (body) => {
  return http.post(
    `${process.env.apiurl}/Product/Search`,
    JSON.stringify(body)
  );
};


export const ProductGetByPermalink = (body) => {
  return http.post(
    `${process.env.serverSideApiUrl}/Product/GetActiveByPermalink`,
    JSON.stringify(body)
  );
};

export const ProductGetPermalinksByPermalinkDomain = (body) => {
  return http.post(
    `${process.env.apiurl}/Product/GetPermalinksByPermalinkDomain`,
    JSON.stringify(body)
  );
};

export const ProductInsertRate = (body) => {
  return http.post(
    `${process.env.apiurl}/Product/InsertRate`,
    JSON.stringify(body)
  );
};

export const ProductGetRateAverageById = (body) => {
  return http.post(
    `${process.env.apiurl}/Product/GetRateAverageById`,
    JSON.stringify(body)
  );
};

// **********************************************
export const CategoryGetAllWithChildsByLang = async () => {

  
  return http.post(
    `${process.env.apiurl}/Category/GetAllWithChildsByLang`
  );
};
export const CategoryGetAllWithChildsByLang2 = async () => {
  var result=await http.post(
    `${process.env.apiurl}/Category/GetAllWithChildsByLang`
  );
  var response=result.data.response.map(item=>{return{
  id:item.id,
  referenceId:item.referenceId,
  permalink:item.productCategoryAttributes[0].permalink,
  title:item.productCategoryAttributes[0].title
    
  }})
    
    return  response;
  };
export const CategoryGetAllWithChildrenForCategoryMenu = async (body) => {
  return http.post(
    `${env.apiurl}/Category/GetAllWithChildrenForCategoryMenu`,
    JSON.stringify(body)
  );
};
export const GetAllWithChildsAndActiveProductCountByLang = async (body) => {
  return http.postWithOutLoad(
    `${process.env.apiurl}/api/Category/GetAllWithChildsAndActiveProductCountByLang`,
    JSON.stringify(body)

  );
};

export const GetAllWithChildsAndProductCountByLang = async (body) => {
  return http.postWithOutLoad(
    `${process.env.apiurl}/api/Category/GetAllWithChildsAndProductCountByLang`,
    JSON.stringify(body)
  );
};


export const InsertOrUpdateRate = async (body) => {
  return http.post(
    `${process.env.apiurl}/Product/InsertOrUpdateRate`,
    JSON.stringify(body)

  );
};
export const CompareProduct = async (body) => {
  return http.post(
    `${process.env.serverSideApiUrl}/Product/CompareProducts`,
    JSON.stringify(body)

  );
};




export const logApi = async (logBody) => {
  return http.post(
    `https://logs.ronixtools.com/api/Log/InsertLog`,
    JSON.stringify(logBody)
  );
}

export const GetFAQ = async (body) => {
  console.log(`${process.env.serverSideApiUrl}/api/Faq/GetAll`);
  return http.post(
    `${process.env.serverSideApiUrl}/Faq/GetAll`,
    JSON.stringify(body),
    {
      headers: {
        "Accept-language": `ir`,
      },
    }
  );
};