import { useEffect } from 'react';
import { internationalAssets } from '../../../next.config';



const Grindingtools = () => {
    useEffect(() => {
        var h1 = $('.Grindingtools-height-box').height();
        var h = $('.Grindingtools-width-box').height(h1);
    }, []);
    return (
        <section className="Grindingtools w-100 d-flex  justify-content-center align-items-center overflow-hidden ">
             <div className="py-4 position-absolute col-6 parent-z-index ">
                        <div className="border-set-right"></div>
                        <div className="box-back-opacity Grindingtools-change-opacity">
                            <span className="text-dark title-font col-12 font-weight-bold Reglo">GRINDING.TOOLS</span>
                            <p className="text-dark col-12 font-14 font-weight-bold text-justify">
                                The angle grinder is one of the most widely used power tools in the trade, which has a wide range of applications. Without this tool, you wouldn’t be able to work in many industries such as metalworking and construction. Even a fireman would use an angle grinder to rescue trapped animals. They are versatile power tools, with which you can grind and cut metal and tiles. They can also polish and do the sharping tasks. In addition to cutting and grinding, the grinders can play the role of a good sharpener for you, with which you can repair all kinds of tools. However, take full caution working with it. It is no joke!                        </p>
                        </div>
                    </div>
            <div className="row">
                <div className="offset-3 d-flex align-items-center  col-md-6 p-0 ">
                    <div className=" Grindingtools-select p-3 d-flex align-items-center">
                        <div className="col-12 px-0 d-flex align-items-center">
                        <div className={'col-6 mx-5  Grindingtools-img0'}>
                                <img src={`${internationalAssets}/img/Grinding.svg`} alt="" className="img-fluid position-relative " />
                            </div>
                            <div className={'col-6 mx-5 Grindingtools-img'}>
                                <img src={`${internationalAssets}/img/Grinding1.svg`} alt="" className="img-fluid position-relative " />
                            </div>
                            <div className={'col-6 mx-5 px-5 Grindingtools-img3'}>
                                <img src={`${internationalAssets}/img/Grinding2.svg`} alt="" className="img-fluid position-relative " />
                            </div>
                            <div className={'col-12 mx-5  Grindingtools-width-box d-flex align-items-center pl-4 font-weight-bold   '}>
                                <p className="font-47 m-auto Grindingtools-cut">Grinder or Cut-Off</p>
                            </div>
                            <div className={'col-8 px-0 ml-5 Grindingtools-img4'}>
                                <img src={`${internationalAssets}/img/Grinding3.svg`} alt="" className="img-fluid position-relative " />
                            </div>
                            <div className={'col-8   Grindingtools-height-box d-flex align-items-center px-0 '}>
                                <div>
                                    <p className="p-4 font-47 font-weight-bold">
                                        Grinder or Cut-Off                                 </p>
                                    <p className="p-4 font-16 font-weight-bold text-justify">
                                        The angle grinder is one of the most widely used power tools in the trade, which has a wide range of applications. Without this tool, you wouldn’t be able to work in many industries such as metalworking and construction. Even a fireman would use an angle grinder to rescue trapped animals. They are versatile power tools, with which you can grind and cut metal and tiles. They can also polish and do the sharping tasks. In addition to cutting and grinding, the grinders can play the role of a good sharpener for you, with which you can repair all kinds of tools. However, take full caution working with it. It is no joke!                                </p>
                                </div>
                            </div>
                            <div className={'col-8 px-0 Grindingtools-img5'}>
                                <img src={`${internationalAssets}/img/Grinding3.svg`} alt="" className="img-fluid position-relative " />
                            </div>
                            <div className={'col-10  Grindingtools-height-box d-flex align-items-center px-4 '}>
                                <div>
                                    <p className="p-4 font-47 font-weight-bold">
                                    Angle Grinder                                </p>
                                    <p className="p-4 font-16 font-weight-bold text-justify">
                                    Angle Grinders can cut different types of metal workpieces such as metal plate, metal bar or metal pipe and so on. But if you do not have the information on which angle grinder to buy, make sure you find about the rpm it can reach. There are few conditions that if the tools do not meet them, you should not use that angle grinder for your car. First of all is the rpm, here stands for No. load of speed. It should be at least 6000 rpm. Bigger angle grinders mostly use with 6000-8000 rpm as No. load speed and smaller ones use with 11000-12000 rpm. Make sure you ask our technical experts at Ronix and consult, before you purchase.                             
                                    
                                    </p>   </div>
                            </div>
                        </div>
                    </div>
                   

                </div>
                <div className="col-md-3 layout-z-index Grindingtools-rightbox"></div>
            </div>
        </section>
    )
}
export default Grindingtools;