import React from 'react';
import { imageAddress } from '../next.config';


export default function Custom404() {
    return <div>
      <img className="setMargin404" src={`${imageAddress}/404-ERROR-4.jpg`} />
    </div>
  
  }
  