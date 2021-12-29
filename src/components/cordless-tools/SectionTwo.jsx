import React from 'react';
import { assetPrefix, internationalAssets } from '../../../next.config';
import Image from 'next/image'


const SectionTwo = () => {
 
    return (
        <div  className="d-flex justify-content-center align-items-center cordless-tools-sectiontwo vh-100 overflow-hidden">
            <div className="py-4 position-absolute col-6 h-50 d-flex align-items-center overflow-hidden">
                <div className="cordless-tools-border-set-right"></div>
                <span className=" text-dark title-font col-12 cordless-tools-sectiontwo-title font-weight-bold Reglo">POWER IS POWER</span>
            </div>
            <div className="row">
                <div className="offset-3-custom d-flex align-items-center  col-md-6 p-0 overflow-hidden mt-4">
                    <div className="col-10 d-flex flex-wrap cordless-battery-box">
                        <p className="font-47 font-weight-bold battery-title">Battery</p>
                        <p>
                            Various factors contribute to the quality and functionality of a Cordless Tools . The first and most important one is the battery. You definitely do not want your Cordless Tools , say a screwdriver, to run out of power in the middle of working on your new DIY project. So, you need to pay great attention to the battery when choosing a Cordless Tools .
                        </p>
                        <img  src={`${internationalAssets}/img/Battery.svg`} alt="" />
                   
                    </div>
                    <div className="col-12 d-flex flex-wrap  cordless-battery-box2 px-5">
                        <div className="col-6">

                        <img  className=" img-fluid" src={`${assetPrefix}/assets/img/Nickel-Cadmium-Batteries.jpg`} alt="" />
                        </div>
                        <div className="col-6">
                            <p className="font-47 font-weight-bold battery-title">Nickel-CadmiumBatteries</p>
                            <p className="font-13 font-weight-bold text-justify cordless-battery-box2-text-transform">
                            Generally, there are different types of batteries for Cordless Tools . The first one is the Nickel-Cadmium battery also known as the Ni-Cd battery. Despite the fact that Nickel Cadmium batteries are one of the oldest batteries in the industry, they have some really special traits that make them still useful. One of their most important characteristics is that they perform really good in rough conditions and can endure working in extremely high and low temperatures.                         </p>
                            <p className="font-13 font-weight-bold text-justify cordless-battery-box2-text-transform2">If you want to work in a really dry and hot place, these batteries are the right choice for you. In addition, compared to other types of batteries, the Ni-Cd batteries are really inexpensive and affordable. One other point to mention in favor of these batteries is their lifespan. They can last a long time if you take care of them properly. The downside of having a Ni-Cd battery in a Cordless Tools is that they are a lot heavier than other options which can cause problem in the long run. So, if you have to work long hours with a Cordless Tools with Ni-Cd battery, you may get tired soon because of its weight. In conclusion, although Nickel Cadmium batteries are one of the oldest ones in the market, they offer some significant features that have made them stick around for such a long time.</p>
                        </div>
                    </div>
                    <div className="col-12 d-flex flex-wrap  cordless-battery-box3 px-5">
                        <div className="col-6">
                        <img className="img-fluid" src={`${assetPrefix}/assets/img/Nickle Metal Hydride Batteries.jpg`} alt="" />

                        </div>
                        <div className="col-6  fix-in-body">
                            <p className="font-47 font-weight-bold battery-title">Nickle Metal
Hydride Batteries</p>
                            <p className="font-13 font-weight-bold text-justify">
                            Nickle metal hydride batteries are another type of cordless batteries. They have been improved upon the Ni-Cd batteries and can be called the newer generation of Nickle-Cadmium batteries. NiMH batteries have better performance than their fathers (Ni-Cd batteries), but unlike them, they are sensitive to temperature and cannot endure working in extremely hot or cold environments. They are also impacted by the memory effect. The memory effect in batteries happens when a rechargeable battery loses its power capacity because of improper charging. If you improperly charge of discharge NiMH batteries, it might affect their lifespan. But if you take good care of them, they will be your tool’s best friends! Due to their improved power capacity, NiMH batteries cost more than Ni-Cd batteries. All and all, Nickle metal hydride batteries are a reasonable choice, especially if you do not work in extremely high or low temperatures.                             </p>
                        </div>
                    </div>
                    <div className="col-12 d-flex flex-wrap  cordless-battery-box4 px-5">
                        <img className="col-6" src={`${assetPrefix}/assets/img/Lithium-Ion Batteries.jpg`} alt="" />
                        <div className="col-6">
                            <p className="font-47 font-weight-bold battery-title ">Lithium-Ion
Batteries</p>
                            <p className="font-13 font-weight-bold text-justify another-text-transform">
                            Another type of batteries that are widely used in Cordless Tools is the Lithium Ion batteries. The Li-Ion batteries are the same ones used in our smartphones. These batteries are the newest generation of batteries for tools. Inventing Li-Ion batteries has revolutionized the Cordless Tools industry because they are a lot lighter than other options. This is definitely a plus for those who work long hours with Cordless Tools .  </p>
                            <p className="font-13 font-weight-bold text-justify another-text-transform2">
                            The power capacity of Lithium-Ion batteries is also higher and it is good to know that via fast chargers, they have the ability to get charged quickly. Therefore, if you are in a rush to meet a deadline, they are at your service! Another thing we need to point out here is that Lithium Ion batteries do not suffer from the memory effect. With Li-Ion batteries, you do not need to worry about the memory effect which can reduce the battery’s power capacity. So far, we have talked more about the pros, now let’s look at the cons of these batteries. The price of Lithium-Ion batteries is higher and they generally cost more than other options. 
                            </p>
                            <p className="font-13 font-weight-bold text-justify another-text-transform3">
                            The thing that you have to know about these batteries is that they are easily affected by high temperatures. Heat causes the chemicals inside of a Li-Ion battery to change. So, always keep in mind to never store your Cordless Tools with a Li-Ion battery in a hot place. Ronix Cordless Tools are produced with Ni-Cd batteries, Li-Ion batteries AND NiMH batteries. So, you can pick what’s best for you!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionTwo;