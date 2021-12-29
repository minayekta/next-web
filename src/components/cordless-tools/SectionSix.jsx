import React from 'react';

import {internationalAssets} from '../../../next.config'
const SectionSix = () => {
    return (
        <div className=" vh-100 sectionsix  d-flex justify-content-center align-items-center overflow-hidden">
            <div className="position-absolute col-8 h-75 d-flex justify-content-center align-items-center ">
                <div className="d-flex flex-wrap justify-content-center">
                    <span className=" text-dark title-font  sectionsix-title font-weight-bold Reglo">PRUNE THE LIMITATIONS</span>
                </div>
                <div className="d-flex flex-wrap justify-content-center sectionsix-box position-absolute  col-10 mt-5">
                    <span className=" text-dark title-font  font-47 font-weight-bold Reglo">Cordless Saws</span>
                    <img src={`${internationalAssets}img/Battery3.svg`} alt="" className="my-3 col-10" />
                    <p className=" font-weight-bold font-13  text-justify">
                        Cutting is one of the primary actions in building. You probably need to cut a piece of material if you are building anything from scratch. This is why saws have been invented. Saws have been developing for many years and nowadays, they are being manufactured in various styles for different applications. One of the most practical type of saws are the cordless saws. With its world-class quality, the Ronix team designs and produces these cordless tools to provide you with a great cutting experience                  </p>
                </div>
                <div className="col-6 sectionsix-box-content4 position-absolute">
                            <p  className="font-weight-bold font-13 text-justify">In conclusion, if you are moving around a lot to work on various construction sites, you can get a lot of use out of cordless power saws.</p>
                        </div>
            </div>
            <div className="row">
                <div className="offset-3 d-flex  align-items-center justify-content-center col-md-6 p-0 overflow-hidden mt-5">
                    <div className="col-12 d-flex align-items-center ">
                        <div className="col-6 sectionsix-box-content">
                            <span className="font-weight-bold font-47">Jigsaws
& Reciprocating Saws</span>
                            <p className="font-13 font-weight-bold text-justify">Jigsaws are mostly used for cutting workpieces vertically. These useful saws can be used on different material. Whether you want to cut straight lines on a wood piece or cut curves in a plastic sheet, cordless jigsaws can be extremely helpful, especially because the cable does not get in the way. Ronix 8801 cordless jigsaw is a great cordless tool to have around. This practical saw has a strong electric motor with a 12 V Li-Ion battery to power it. The handle is coated with rubber to offer a firm grip. Sometimes, changing the blade in jigsaws can take a lot of time because they need special keys or wrenches. But with the Ronix 8801 cordless jigsaw, you can change an old blade with a fresh one just by snapping it into the tool. A reciprocating saw is a lot like a jigsaw, they both cut with the push and pull motion of the blade. The difference is that with a reciprocating saw, you can cut at various and unusual angles.</p>
                        </div>
                        <div className="col-6 sectionsix-img">
                            <img src={`${internationalAssets}/img/Drills2.svg`} className="img-fluid" alt="" />
                        </div>
                        <div className="col-6  sectionsix-box-content2">
                            <span className="font-weight-bold font-47">Cordless Circular Saws
& Miter Saws</span>
                            <p className="font-13 font-weight-bold text-justify">Grasscutters (also known as brush cutters) are another group of gardening tools that are extremely handy in gardening. Since you do not have to worry about the nearest power socket, a cordless grasscutter is perfect for having a flawless lawn. You can wear some grasscutter models on your shoulders or around your waist to be able to move around easily. One specific type of cordless grasscutters are edge shears. Edge shears are used for trimming and tidying the edges of the lawn. Sometimes cutting the edge of your grass lawn with a grasscutter becomes difficult. This is when edge shears come to the rescue! With their slim blades, these cordless tools can reach the unreachable places and make the perfect lawn that you’ve always wanted</p>
                        </div>
                        <div className="col-6 sectionsix-img2">
                            <img src={`${internationalAssets}/img/Drills2.svg`} className="img-fluid" alt="" />
                        </div>
                        <div className="col-6  sectionsix-box-content3">
                            <span className="font-weight-bold font-47">Cordless Bandsaw</span>
                            <p className="font-13 font-weight-bold text-justify">The construction of a bandsaw is interesting. An electric motor rotates a toothy blade that cuts the material. Bandsaws are extremely useful in wood working and metal working. However, their uses are not limited to these fields, with proper blades, they can cut PVC or dry wall. Like a jigsaw, they can cut curved lines.</p>
                        </div>
                        <div className="col-6 sectionsix-img3">
                            <img src={`${internationalAssets}/img/Drills2.svg`} className="img-fluid" alt="" /> 
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionSix;