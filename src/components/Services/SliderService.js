import http from './httpService';

import { env } from "../../../next.config";
// const { process.env } = getConfig()

export const ImageSlideshowGetAll = () => {
  // return http.post(`http://172.16.213.66:8000/api/clientapi/searchkala`,JSON.stringify(text));
  return http.post(`${process.env.apiurl}/ImageSlideshow/GetAll`);

}


export const GetWebSiteSlideShowItemByName = async (body) => {
    return http.post(
      `${process.env.apiurl}/SlideShows/GetWebSiteSlideShowItemByName`,
      JSON.stringify(body),
      
    );
  };
