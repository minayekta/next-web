import http from './httpService';
export  const CustomRedirect = (permalink, urlSerctionCount, pageName) => {
    var responseCode=null;
    
    if (urlSerctionCount > 1) {
        responseCode = 301;
    }
    if (pageName === 'product-category') {
        //Todo call category by permalink api


    }
    if (pageName === 'product') {
        //Todo call product by permalink api
        
        
    }
    return { permalink,responseCode };
}


export const CommonRedirectGetByUrl= (body)=>{
    return  http.post(`${process.env.apiurl}/Common/RedirectGetByUrl`,JSON.stringify(body));
}
