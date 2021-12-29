import React from 'react';
import {internationalAssets} from '../next.config'
const UnderConstruction = () => {
    return (
        <img className="img-fluid" src={`${internationalAssets}/img/under-construction.jpg`} />
      );
}
 
export default UnderConstruction;