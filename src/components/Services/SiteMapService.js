import { env } from '../../../next.config';
import http from './httpService';
export const GetSiteMapAttribute = async (body) => {
    return http.get(
      `${env.serverSideApiUrl}/Category/GetSiteMapAttribute`,
      JSON.stringify(body),
      
    );
  };
export const GetAttributeSiteMap = async (body) => {
    return http.get(
      `${env.serverSideApiUrl}/Product/GetAttributeSiteMap`,
      JSON.stringify(body),
      
    );
  };
