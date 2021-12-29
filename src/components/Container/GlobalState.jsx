import { useState } from 'react';
import SiteContext from '../Context/WebSiteContext.js';
const GlobalState = props => {
    const [productRateVlue, setProductRateVlue] = useState([]);
    const [producetAdded, setProductAdded] = useState([]);
    const [counter, setCounter] = useState(0);
    const [checkJs , setCheckJs] = useState(false)
    return (

        <SiteContext.Provider
            value={{
                productRateVlue: productRateVlue,
                setProductRateVlue: setProductRateVlue,
                producetAdded: producetAdded,
                setProductAdded: setProductAdded,
                counter: counter,
                setCounter: setCounter,
                checkJs:checkJs,
                setCheckJs:setCheckJs
            }}

        >
            {props.children}
        </SiteContext.Provider>
    );
}

export default GlobalState;