import $ from 'jquery';
import { Fragment, useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import WebSiteContext from '../../Context/WebSiteContext';
import { InsertOrUpdateRate } from '../../Services/productService';
const RateBox =(props)=>{
    const context=useContext(WebSiteContext)
    const [valuer,setVal]=useState(props.Firstvalue?props.Firstvalue:'0');
    const [finalVal,setFinalVal]=useState(props.avgItem?props.avgItem:'NA');
    const [cookies,setCookies]=useCookies('ronix')
    const handleChangeComplete=(NewVal)=>{
        setVal(NewVal);setFinalVal(NewVal);
        let rateValueVal=NewVal;
        const body = {
            productId: props.productId,
            rateItemId: props.rateItemId,
            rateValue: rateValueVal,
            cookieValue: cookies.ronix
             
            
        };
        async function  getOrUpdateRate (){
            const rate = await InsertOrUpdateRate(body);
            context.setProductRateVlue(rate.data.response);
            $('.avrage-rate span').text(rate.data.response.userAverageRate);
            
        }
        getOrUpdateRate();
    }
    return (
     <div className='col-12 py-xl-3 d-xl-flex px-0 algin-items-center'>
         <div className={`text-left pl-0 col-12 col-xl-3 pt-xl-1 pt-md-2 pt-3 pb-2 pb-md-1  pb-xl-0 float-left c-grayD font-13`}>{props.label}</div>
         <div className={props.disabled ? 'col-9 col-xl-8 float-left px-0 range-level-'+parseInt(props.avgItem):'col-9 col-xl-8 float-left px-0 range-level-'+valuer}>
            <InputRange
            maxValue={5}
            minValue={0}
            value={props.disabled?props.avgItem:valuer}
            step={1}
            onChange={(NewVal)=> setVal(NewVal)}
            disabled={props.disabled?props.disabled:false}
            onChangeComplete={(NewVal) => {handleChangeComplete(NewVal)}}/>
            <div className='dot-list col-12 px-0'>
                {!props.disabled?
                <Fragment>
                    <div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                </div>
                <div>
                </div>
                </Fragment>:null
            }
            </div>
         </div>
         <div className='col-3 col-xl-1 float-left final-rate pr-0 text-right font-14 c-grayD'>{props.disabled?props.avgItem:finalVal}</div>
         
         <div className='col-12 font-18'></div>
     </div>)
}
export default RateBox;