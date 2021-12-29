import axios from 'axios';
import {currentlanguageCode} from '../../../next.config';
axios.defaults.headers.post["Accept"] = "text/plain";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

//  axios.defaults.headers["Content-Type"]=;

//  axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

 axios.defaults.headers.post["Accept-Language"] = currentlanguageCode;
axios.interceptors.response.use(null, error => {
    const expectedErrors = error.response &&
        error.response.status >= 400 && 
        error.response.status < 500;
        if(!expectedErrors){
            // toast.error(`مشکلی از سمت سرور رخ داده است.${error.response}`,{position:'top-right',closeOnClick:true});
            // alert(error);
        }
      
        return Promise.reject(error);

});
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    
}