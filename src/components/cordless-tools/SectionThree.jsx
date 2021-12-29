import React from 'react';

import { internationalAssets } from '../../../next.config'

const SectionThree = () => {
    return (
        <div className="bg-white cordless-tools-sectionthree d-flex align-items-center vh-100 overflow-hidden">
            <div className="offset-3 py-4 position-absolute col-6 h-50 d-flex justify-content-center align-items-center ">
                <div className="cordless-tools-border-set-right"></div>
                <div className="d-flex flex-wrap justify-content-center mt-5 pt-5">
                    <span className=" text-dark title-font  cordless-tools-sectionthree-title font-weight-bold Reglo mt-5">Voltage (V)</span>
                    <img src={`${internationalAssets}/img/Battery3.svg`} alt="" className="col-10 my-3 cordless-tools-sectionthree-img" />
                    <p className=" font-weight-bold font-13 cordless-tools-sectionthree-paragraph text-justify  cordless-tools-sectionthree-transform">
                        The voltage (V) of a battery determines how much power and strength a battery is able to provide. A higher voltage means that the battery is more powerful and can perform heavier tasks like drilling through hard material such as concrete. Ronix offers a wide range of voltages for its Cordless Tools ’ batteries. You might wonder why not just put the highest possible voltage in every Cordless Tools ? The reason is that the more powerful a battery is, the heavier it gets. Because of this and to cover all the customers’ needs for Cordless Tools , Ronix cordless products are manufactured with different voltages.
                    </p>
                    <p className="font-weight-bold font-13 cordless-tools-sectionthree-paragraph text-justify cordless-tools-sectionthree-transform2"> Generally speaking, batteries with a voltage between 3.6 V to 12 V are for lighter functions like screwdrivers. For example, the Ronix 8500 cordless screwdriver has a 3.6 V battery designed for light-duty screwing and general uses. But what if you want a Cordless Tools for heavy-duty applications? Well for heavier functions, batteries that have a voltage between 14.4 V to 36 V are the best. Ronix 8618 cordless impact drill with an 18 V battery is a great model to break through hard workpieces</p>
                </div>
            </div>
            <div className="row">
                <div className="offset-3 d-flex align-items-center  col-md-6 p-0 overflow-hidden">
                    <div className="col-md-10 d-flex flex-wrap cordless-tools-sectionthree-box-1 justify-content-center mt-5 pt-5">
                        <p className="col-12 text-center font-weight-bold ampere-title">Ampere-hour (A.h)</p>
                        <img src={`${internationalAssets}/img/Battery2.svg`} alt="" className="col-10  ampere-img mb-3" />
                        <p className="font-13 font-weight-bold text-justify ampere-paragraph">
                            many hours you can use the device until the battery runs out of energy. The run time is directly related to something called ampere-hour or amp-hour. A higher amp-hour number means a Cordless Tools can operate for a longer period of time. Much like voltage, a higher Ah (amp-hour) number results in a heavier battery. Choosing the right Cordless Tools is tightly connected to the type of work you want to do and as mentioned earlier, Ronix offers its Cordless Tools s with a wide range of batteries. If you want to use your tool on harder workpieces, you need to get a device with a high amp-hour; such as Ronix 8618 impact drill that has 1.5 Ah. However, if you want to be able to easily carry your Cordless Tools around, you better choose a device with lower Ah; like Ronix 8510 drill-driver with an amp-hour of 1.3
                        </p>
                    </div>
                    <div className="col-md-10 d-flex flex-wrap cordless-tools-sectionthree-box-1 ">
                        <p className="cordless-tools-sectionthree-end font-13 font-weight-bold text-justify">
                        Before making your decision about which battery to choose, you need to ask yourself very important questions. Do you care more about power or do you want to be able to move around with your Cordless Tools quickly? Are you going to use your tool in very high and low temperatures? How much are you willing to spend on a tool? There are a lot of factors to take into account when you want to decide which Cordless Tools to buy. So, finding the answers to these questions before purchasing, can save you from future regrets.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree;