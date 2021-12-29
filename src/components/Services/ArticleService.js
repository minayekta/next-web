import http from './httpService';
import { currentlanguageCode } from './../../../next.config'
export const GetArticle =async (type) => {

    var result=await http.get(`https://ronixtools.com/${currentlanguageCode}/${type}/wp-json/wp/v2/posts?_embed&post_status=publish&per_page=14`);
    
    var response=result.data.map(item=> {return {id:item.id,link:item.link,["_embedded"]:item["_embedded"],title:item.title.rendered}});
    return response;
}
export const GetNews = async () => {
    var result=await  http.get(`https://ronixtools.com/${currentlanguageCode}/news/wp-json/wp/v2/posts?_embed`);
    var response=result.data.map(item=> {return {id:item.id,link:item.link,["_embedded"]:item["_embedded"],title:item.title.rendered}});
    return response;


}

