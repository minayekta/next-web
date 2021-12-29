import React from 'react';
import VideoYoutube from '../Home/VideoYoutube';

import {internationalAssets} from '../../../next.config';
const ScrewingTooLs =  () => {
    return (
        <section className="screwing-tools w-100 d-flex  justify-content-center align-items-center overflow-hidden bg-white">
            <div className="py-4 position-absolute col-6">
                <div className="border-set-right"></div>
                <div className="box-back-opacity">
                    <span className="screwing-tools-title text-dark title-font col-12 font-weight-bold Reglo">SCREWING.TOOLS</span>
                    <p className="screwing-tools-title font-responsive text-dark col-12 font-16 font-weight-bold text-justify">
                        Have you ever wondered, screwing through a wall was much harder before? Thanks to technology and bright minds, we can now easily screw with power tools through any material, a soft piece of wood or solid metal. After seeing what drills can do in the previous section, it is now clear that they can also do the screwing task. By adding a reversible switch for forward/reverse motion, they were able to perform the screwing operation. Worth mentioning that all Ronix drills have the screwing option, whether an electric, impact, or a cordless one. However, the strong power of electric drill has led manufacturers to go after designing a cordless drill for more control and stability. Screw It all started with the main piece, the screw. Having a head on one end keeps the screw from driving into the material deeper than the surface. And the other part (called screw drive) is for turning the screw with a tool, whether with a screwdriver or Ronix drill. Most screws are tightened by clockwise rotation or also known as right-handed. Depending on what material you have, the screws are varied, from a wood screw to a metal or concrete screw; you should know the types before you start drilling and screwing. Usually, the wood and MDF screws have coarse threads and wider pitches than metal screws, with fine threads. The material's resistance to the screw has been a challenge that, thanks to power tools, the operation is now a piece of cake! Now that we know a bit more about screws, we can now see why we need screwdrivers and drills to make the action easier. The common power tools for this action are cordless drills. The main difference between them and a regular electric drill is that they already have a powerful battery inside them, making you needless to search for a power outlet all the time. Despite the differences, they also have some in api1. They both can do the job for you, regardless to say that drills have more other options.
                        </p>
                </div>
            </div>
            <div className="row  w-100">
                <div className="offset-3 d-flex align-items-center  col-md-6 p-0 ">
                    <div className="bg-white screwing-tools1  p-3 d-flex align-items-center">
                        <div className={'col-3 mx-3 screwing-tools-img1'}>
                            <img src={`${internationalAssets}/img/Screwing.svg`} alt="" className="img-fluid position-relative " />
                        </div>
                        <div className={'col-3 mx-5 screwing-tools-img2 px-5 screwing-tools-img'}>
                            <img src={`${internationalAssets}/img/Screwing1.svg`} alt="" className="img-fluid position-relative " />
                        </div>
                        <div className={'col-4 mx-5 screwing-tools-img3 px-5'}>
                            <img src={`${internationalAssets}/img/Screwing2.svg`} alt="" className="img-fluid position-relative " />
                        </div>
                        <div className={'col-5 mx-5 px-5 screwing-tools-scale-text'}>
                            <p className="font-47 Reglo screwing-tools-width-box">Have you ever heard of a 'torque control ring'?</p>
                        </div>
                        <div className={'col-2 mx-5 Screwing3'}>
                            <img src={`${internationalAssets}/img/Screwing3.svg`} alt="" className="img-fluid position-relative " />
                        </div>
                        <div className={'col-2 bg-white screwing-tools-height-box d-flex align-items-center px-0'}>
                            <div>
                                <p className="px-4 Reglo font-30 font-weight-bold">
                                    Have you ever heard of a 'torque control ring'?
                                </p>
                                <p className="px-4 font-16 font-weight-bold text-justify">
                                    Each power tool with the screwing function has a torque control ring that allows the user to control the torque level, depends on the size of the screw or how solid your material is. This part would be helpful in a situation when your screw is fully driven into the surface, and if the level has been selected reasonably, by keeping on screwing, your screw would just release. This part is placed next to the chuck. The higher you select the level, the stronger the screwing force is. That is to say, make sure you start with lower levels to avoid damage if you already do not know the proper level. Knowing different parts of your power tool takes you another step closer to become a pro. Then take the first steps and download our full-detailed catalog for more information. Ronix is also well-known for having a wide range of cordless tools, just for you to get your job done, easier than ever.
                                </p>
                            </div>
                        </div>
                        <div className={'col-7 bg-white screwing-tools-height-box d-flex align-items-center px-0'}>
                            <div className="center-align-text-drill">
                                <p className="px-4  Reglo font-30 font-weight-bold font-47 screwing-tools-scale-text2">
                                    Drills item code
                                </p>
                            </div>
                        </div>
                        <div className={'col-4 px-0 bg-white Screwing4'}>
                            <img src={`${internationalAssets}/img/Screwing4.svg`} alt="" className="img-fluid position-relative " />
                        </div>
                        <div className={'col-2 bg-white screwing-tools-height-box screwing-tools-transform d-flex align-items-center mx-5'}>
                            <div>
                                <p className="px-4 Reglo font-30 font-weight-bold">
                                    Have you ever heard of a 'torque control ring'?
                                </p>
                                <p className="px-4 font-16 font-weight-bold text-justify">
                                    As mentioned before, our power tools each have their own code item so that you can easily find out about their functions. For example, our drills (starting with the number ‘2’) with screwing function have the number ‘5’ as the second digit, and our cordless drills usually start with the number ‘8’. However, this can change due to other functions they may have. As the wide variety of cordless tools have, we will talk more about it in the next section. All information you’ll ever need!                                </p>
                            </div>
                        </div>
                        <div className={'col-4 px-0 bg-white'}>
                            {/* <img src={`${internationalAssets}/img/Screwing5.svg" alt="" className="img-fluid position-relative " /> */}
          <VideoYoutube Src='//www.youtube.com/embed/RNGxGMeNc34' />
                        </div>
                    </div>

                </div>
                <div className="col-md-3 layout-z-index bg-white"></div>
            </div>
            
        </section>
    )
}
export default ScrewingTooLs;