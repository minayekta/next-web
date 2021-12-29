import Link from 'next/link';
import React from 'react';

import { assetPrefix, currentlanguageCode, domainAddress, isRtl } from '../../../next.config';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');

const Breadcrumb = ({ firstItem, secondItem, thirdItem, forthItem, containerClass }) => {

    return (
        <nav className={`breadcrumb d-none text-right breadcrumb-nav bg-transparent col-md-12 m-0 d-xl-block ${containerClass}  ${isRtl ? '' : ''}`}>
            <a className="breadcrumb-item2 text-dark font-12" href={domainAddress + assetPrefix}>{text.Home}</a>

            {firstItem == null ? null :
                <Link href={`${firstItem.link}`}>
                    <a className="breadcrumb-item2 text-dark font-12" href={firstItem.link}><span className='d-inine-block px-1'>/</span>{firstItem.title}</a>
                </Link>
            }
            {secondItem == null ? null : secondItem.title == "null" ? null :

                <Link href={`${secondItem.link}`}>
                    <a className="breadcrumb-item2 text-dark font-12" href={secondItem.link} ><span className='d-inine-block px-1'>/</span>{secondItem.title}</a>
                </Link>

            }
            {thirdItem == null ? null : thirdItem.title == "null" ? null :
                <Link href={`${thirdItem.link}`}>

                    <a className="breadcrumb-item2 text-dark font-12" href={thirdItem.link} ><span className='d-inine-block px-1'>/</span>{thirdItem.title}</a>
                </Link>

            }
            {forthItem == null ? null :
                <Link href={`${forthItem.link}`}>
                    <a className="breadcrumb-item2 text-dark font-12" href={forthItem.link}><span className='d-inine-block px-1'>/</span>{forthItem.title}</a>
                </Link>
            }


        </nav>
    )
}

export default Breadcrumb;