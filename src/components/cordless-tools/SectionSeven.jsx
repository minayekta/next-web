import React from 'react';
import {internationalAssets} from '../../../next.config';

const SectionSeven = () => {
    return (
        <div className="vh-100 sectionseven bg-white  d-flex justify-content-center align-items-center overflow-hidden">
            <div className="position-absolute col-8 h-75 d-flex justify-content-center align-items-center ">
                <div className="d-flex flex-wrap justify-content-center">
                    <span className=" text-dark title-font  sectionseven-title font-weight-bold Reglo">PRUNE THE LIMITATIONS</span>
                </div>
                <div className="d-flex flex-wrap justify-content-center sectionseven-box position-absolute  col-10 mt-5">
                    <span className=" text-dark title-font  font-47 font-weight-bold Reglo">Cordless Saws</span>
                    <img src={`${internationalAssets}/img/Battery3.svg`} alt="" className="my-3 col-10" />
                    <p className=" font-weight-bold font-13  text-justify">
                        Cordless tools give us the freedom of moving around easily and make difficult tasks simple for us. This is why they have been expanding in numerous fields
                         </p>
                </div>

            </div>
            <div className="row">
                <div className="offset-3 d-flex  align-items-center justify-content-center col-md-6 p-0 overflow-hidden">
                    <div className="col-12 d-flex align-items-center ">
                        <div className="col-6 sectionseven-img">
                            <img src={`${internationalAssets}/img/cordlessSaws.svg`} className="img-fluid" alt="" />
                        </div>
                        <div className="col-6 sectionseven-box-content">
                            <span className="font-weight-bold font-47">Cordless Spotlights</span>
                            <p className="font-13 font-weight-bold text-justify">Jigsaws are mostly used for cutting workpieces vertically. These useful saws can be used on different material. Whether you want to cut straight lines on a wood piece or cut curves in a plastic sheet, cordless jigsaws can be extremely helpful, especially because the cable does not get in the way. Ronix 8801 cordless jigsaw is a great cordless tool to have around. This practical saw has a strong electric motor with a 12 V Li-Ion battery to power it. The handle is coated with rubber to offer a firm grip. Sometimes, changing the blade in jigsaws can take a lot of time because they need special keys or wrenches. But with the Ronix 8801 cordless jigsaw, you can change an old blade with a fresh one just by snapping it into the tool. A reciprocating saw is a lot like a jigsaw, they both cut with the push and pull motion of the blade. The difference is that with a reciprocating saw, you can cut at various and unusual angles.</p>
                        </div>
                        <div className="col-6 sectionseven-img2">
                            <img src={`${internationalAssets}/img/CordlessStaple.svg`} className="img-fluid" alt="" />
                        </div>
                        <div className="col-6  sectionseven-box-content2">
                            <span className="font-weight-bold font-47">Cordless Staple Guns</span>
                            <p className="font-13 font-weight-bold text-justify">Grasscutters (also known as brush cutters) are another group of gardening tools that are extremely handy in gardening. Since you do not have to worry about the nearest power socket, a cordless grasscutter is perfect for having a flawless lawn. You can wear some grasscutter models on your shoulders or around your waist to be able to move around easily. One specific type of cordless grasscutters are edge shears. Edge shears are used for trimming and tidying the edges of the lawn. Sometimes cutting the edge of your grass lawn with a grasscutter becomes difficult. This is when edge shears come to the rescue! With their slim blades, these cordless tools can reach the unreachable places and make the perfect lawn that you’ve always wanted</p>
                        </div>
                        <div className="col-6 sectionseven-img3">
                            <img src={`${internationalAssets}/img/cordlessSaws.svg`} className="img-fluid" alt="" />
                        </div>
                        <div className="col-6  sectionseven-box-content3">
                            <span className="font-weight-bold font-47">Cordless Staple Guns</span>
                            <p className="font-13 font-weight-bold text-justify">The construction of a bandsaw is interesting. An electric motor rotates a toothy blade that cuts the material. Bandsaws are extremely useful in wood working and metal working. However, their uses are not limited to these fields, with proper blades, they can cut PVC or dry wall. Like a jigsaw, they can cut curved lines.</p>
                        </div>
                        <div className="col-6 sectionseven-img4">
                            <img src={`${internationalAssets}/img/CordlessStaple.svg`} className="img-fluid" alt="" />
                        </div>
                        <div className="col-6  sectionseven-box-content4 pb-3">
                            <span className="font-weight-bold font-47 ">Cordless Vacuum Cleaners & Blowers</span>
                            <p className="font-13 font-weight-bold text-justify sectionseven-text-transform">You arrive at home after a long road trip, park your car in the garage and go straight to bed to rest and get your strength back. The next day, you wake up, put on your work clothes and get ready to get back to the office. You open your car’s door and then, you see it. The car is absolutely rubbish! Dust, cookie crumbs and sand are all over your car. It is time to face it, you really need to clean. If you have ever experienced cleaning your car, you must have realized the difficulty of vacuuming it with a corded vacuum cleaner. Regular vacuum cleaners are too large and a handful for cleaning tight spaces like inside of a car. </p>
                            <p className="font-13 font-weight-bold text-justify sectionseven-text-transform2">
                                This is why cordless vacuum cleaners have been invented. These super handy cordless tools have many uses; as mentioned above, you can use them for vacuuming your car, getting that old TV’s dust off or removing those tiny wooden parts from the unreachable corners of the workshop. Ronix 1203 is a powerful and yet, light-weight cordless vacuum cleaner for dry or wet conditions. It has fast-charging batteries and a stand-charger which makes it super-easy for you to charge it. The purpose of blowers is very similar to vacuum cleaners, they are both used for cleaning dust. A blower blows air to move thin and light objects from a surface. There are different types of blowers, the smaller models are handheld, some of them can rest on your shoulders and the bigger ones, might even have wheels.
                        </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionSeven;