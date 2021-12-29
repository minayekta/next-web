import React from 'react';
import {internationalAssets} from '../../../next.config';
const SectionFive = () => {
    return (
        <div className=" vh-100 sectionfive bg-white d-flex justify-content-center align-items-center overflow-hidden">
            <div className="position-absolute col-8 h-75 d-flex justify-content-center align-items-center ">
                <div className="d-flex flex-wrap justify-content-center">
                    <span className=" text-dark title-font  sectionfive-title font-weight-bold Reglo">PRUNE THE LIMITATIONS</span>
                </div>
                <div className="d-flex flex-wrap justify-content-center sectionfive-box position-absolute  col-10 mt-5">
                    <span className=" text-dark title-font  font-47 font-weight-bold Reglo">Cordless Gardening Tools</span>
                    <img src={`${internationalAssets}/img/Battery3.svg`} alt="" className="my-3 col-10" />
                    <p className=" font-weight-bold font-13  text-justify">
                        Gardening is one the most enjoyable activities around the world. And like many other professional activities, it requires professional tools. However, the possibility of finding a source of electricity in a garden is really low. If you want to work with electric-powered tools in your garden, you either need to get a generator or you can go cordless. Because of the difficulty of getting a power plug in the garden, cordless gardening tools have been developed to help you during the sunny summer days in the garden.                    </p>
                </div>
            </div>
            <div className="row">
                <div className="offset-3 d-flex  align-items-center justify-content-center col-md-6 p-0 overflow-hidden">
                    <div className="col-12 d-flex align-items-center ">
                        <div className="col-6 sectionfive-box-content">
                            <span className="font-weight-bold font-47">Cordless Gardening Chainsaw</span>
                            <p className="font-13 font-weight-bold text-justify">One of the most famous gardening cordless tools is chainsaw. Fun fact, one of the earliest models of chainsaws in the world was invented by a German surgeon for cutting bones. Despite its early application in the medical field, today chainsaws are generally used for cutting trees and branches. Cordless chainsaws consist of a chain-shaped blade that is wrapped around a guide bar and an engine that generates the power in order to move the blade. Cordless chainsaws are a lot quieter than their gasoline-powered siblings; that is why working with them is more enjoyable. They are also lighter and more compact, so, it is easier to walk around the garden with them</p>
                        </div>
                        <div className="col-6 sectionfive-img">
                            <img src={`${internationalAssets}/img/Drills2.svg`} alt="" />
                        </div>
                        <div className="col-6  sectionfive-box-content2">
                            <span className="font-weight-bold font-47">Cordless Gardening Grasscutter</span>
                            <p className="font-13 font-weight-bold text-justify">Grasscutters (also known as brush cutters) are another group of gardening tools that are extremely handy in gardening. Since you do not have to worry about the nearest power socket, a cordless grasscutter is perfect for having a flawless lawn. You can wear some grasscutter models on your shoulders or around your waist to be able to move around easily. One specific type of cordless grasscutters are edge shears. Edge shears are used for trimming and tidying the edges of the lawn. Sometimes cutting the edge of your grass lawn with a grasscutter becomes difficult. This is when edge shears come to the rescue! With their slim blades, these cordless tools can reach the unreachable places and make the perfect lawn that you’ve always wanted</p>
                        </div>
                        <div className="col-6 sectionfive-img2">
                            <img src={`${internationalAssets}/img/Drills2.svg`} alt="" />
                        </div>
                        <div className="col-6  sectionfive-box-content3">
                            <span className="font-weight-bold font-47">Cordless Pruning Shears & Loppers</span>
                            <p className="font-13 font-weight-bold text-justify">Are you suffering from a serious hand injury? Have you damaged your hands because of frequently repeated hand movements? If your answers are yes to these questions, then using an ordinary pruning shear must be difficult and painful for you. To solve this problem, cordless electric-powered pruning shears are designed to make cutting branches easier for you. Loppers are another type of scissor-like cordless tools that are used in gardening. In general, they have longer blades and handles compared to pruning shears to cut bigger branches and twigs</p>
                        </div>
                        <div className="col-6 sectionfive-img3">
                            <img src={`${internationalAssets}/img/Drills2.svg`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFive;