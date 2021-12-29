import React from 'react';
import Config, { isRtl } from '../../../next.config';
import { motion } from 'framer-motion';
import { BrowserView } from 'react-device-detect';

import { currentlanguageCode } from '../../../next.config';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
const ProductInfo = (props) => {

    let easing = [0.175, .1, 0.42, 0.96];
    const productNameMtion = {
        exit: { x: -30, opacity: 0 },
        enter: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: easing
            }
        }
    }
    const productCodeMotion = {
        exit: { x: -30, opacity: 0 },
        enter: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.8,
                duration: 0.5,
                ease: easing
            }
        }
    }

    const fadeIn = {
        exit: { opacity: 0, transition: { duration: 0.3, ease: easing } },
        enter: {
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.3,
                ease: easing
            }
        }
    };






    return (
        <motion.div initial="exit" animate="enter" exit="exit" className={'col-12 px-0'}>
            <div><BrowserView>
                <div className={`col-12 px-0 `} >
                    <motion.h1 variants={productNameMtion} className={'m-0 font-25 d-block'}>{props.productName}</motion.h1>
                    <motion.p variants={productCodeMotion} className={'font-19 d-block'}>{props.productCode}</motion.p>
                </div>
            </BrowserView></div>
            <div className={'col-12 px-0 pb-4 border-bottom mt-4 mt-xl-0'}>
                <div className={'col-12 col-xl-9 px-0 px-xl-3'}>
                    <motion.div variants={fadeIn} className={'row px-0 flex-wrap d-flex'}>
                        <div className={`col-4 px-0 text-center text-xl-left `}>
                            <a className={'d-block'} target={'_blank'} href={props.catalogLink !== '' && props.catalogLink != null ? Config.productImageUrl + '/' + props.productCode + '/' + props.catalogLink : '#'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
                                    <path id="Path_151" data-name="Path 151"
                                        d="M14,2H6A2,2,0,0,0,4.01,4L4,20a2,2,0,0,0,1.99,2H18a2.006,2.006,0,0,0,2-2V8Zm2,16H8V16h8Zm0-4H8V12h8ZM13,9V3.5L18.5,9Z"
                                        transform="translate(-4 -2)" />
                                </svg>
                                <span className={`px-xl-2 d-block c-black align-middle mt-1 d-xl-inline-block font-13 `}>{text.Catalog}</span>
                            </a>
                        </div>
                        <div className={'col-4 px-2 text-center border-left border-right'}>
                            <a target={props.userManualLink !== '' ? '_blank' : ''} href={props.userManualLink !== '' && props.userManualLink != null ? Config.productImageUrl + '/' + props.productCode + '/' + props.userManualLink : '#'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17">
                                    <g id="Group_518" data-name="Group 518" transform="translate(-1 -4.5)">
                                        <g id="Group_517" data-name="Group 517">
                                            <path id="Path_153" data-name="Path 153"
                                                d="M21,5a11.8,11.8,0,0,0-3.5-.5A9.3,9.3,0,0,0,12,6,9.3,9.3,0,0,0,6.5,4.5,9.3,9.3,0,0,0,1,6V20.65a.538.538,0,0,0,.5.5c.1,0,.15-.05.25-.05A12.205,12.205,0,0,1,6.5,20,9.3,9.3,0,0,1,12,21.5,12.045,12.045,0,0,1,17.5,20a10.178,10.178,0,0,1,4.75,1.05.451.451,0,0,0,.25.05.538.538,0,0,0,.5-.5V6A6.821,6.821,0,0,0,21,5Zm0,13.5a11.62,11.62,0,0,0-3.5-.5A12.045,12.045,0,0,0,12,19.5V8a12.045,12.045,0,0,1,5.5-1.5A11.62,11.62,0,0,1,21,7Z" />
                                            <g id="Group_516" data-name="Group 516">
                                                <path id="Path_154" data-name="Path 154"
                                                    d="M17.5,10.5a11.694,11.694,0,0,1,2.5.26V9.24A13.5,13.5,0,0,0,17.5,9a11.507,11.507,0,0,0-4.5.83v1.66A9.283,9.283,0,0,1,17.5,10.5Z" />
                                                <path id="Path_155" data-name="Path 155"
                                                    d="M13,12.49v1.66a9.283,9.283,0,0,1,4.5-.99,11.694,11.694,0,0,1,2.5.26V11.9a13.5,13.5,0,0,0-2.5-.24A11.691,11.691,0,0,0,13,12.49Z" />
                                                <path id="Path_156" data-name="Path 156"
                                                    d="M17.5,14.33a11.507,11.507,0,0,0-4.5.83v1.66a9.283,9.283,0,0,1,4.5-.99,11.694,11.694,0,0,1,2.5.26V14.57A12.7,12.7,0,0,0,17.5,14.33Z" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span
                                    className={'px-xl-2 d-block c-black align-middle mt-1 d-xl-inline-block font-13'}>{text.UserManual}</span>
                            </a>
                        </div>
                        <div className={`col-4 px-0 text-center text-xl-right `}>
                            <a target={props.explodedMapLink !== '' ? '_blank' : ''} href={props.explodedMapLink != '' && props.explodedMapLink != null ? Config.productImageUrl + '/' + props.productCode + '/' + props.explodedMapLink : '#'}>
                                <svg width="16px" height="20px" id="Layer_1" data-name="Layer 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 20">
                                    <path id="Path_160" data-name="Path 160"
                                        d="M10,0H2A2,2,0,0,0,0,2V18a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V6ZM2,18V2H9V7h5V18Z" />
                                    <path id="Path_158" data-name="Path 158"
                                        d="M10.63,12c0-.12,0-.23,0-.35a2,2,0,0,0,0-.34l.75-.59a.18.18,0,0,0,0-.22L10.7,9.27a.17.17,0,0,0-.21-.08l-.88.35A2.57,2.57,0,0,0,9,9.2l-.13-.94a.19.19,0,0,0-.18-.15H7.29a.18.18,0,0,0-.17.15L7,9.2a2.52,2.52,0,0,0-.6.34l-.88-.35a.17.17,0,0,0-.21.08l-.7,1.22a.16.16,0,0,0,0,.22l.75.58a1.78,1.78,0,0,0,0,.69l-.75.58a.18.18,0,0,0,0,.23L5.29,14a.18.18,0,0,0,.22.08l.88-.35a2.55,2.55,0,0,0,.6.35l.13.93a.17.17,0,0,0,.18.15H8.7A.17.17,0,0,0,8.88,15L9,14.09a3,3,0,0,0,.6-.35l.88.35A.17.17,0,0,0,10.7,14l.71-1.22a.17.17,0,0,0,0-.22ZM8,13a1.33,1.33,0,1,1,1.32-1.33h0A1.33,1.33,0,0,1,8,13Z" />
                                </svg>
                                <span className={'px-xl-2 d-block c-black align-middle mt-1 d-xl-inline-block font-13'}>{text.ExplodedMap}</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
export default ProductInfo;