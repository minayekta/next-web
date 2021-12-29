import { internationalAssets } from '../../../next.config';

const TunnelSection = () => {
   
    return (
        <section className="power-tools d-flex justify-content-center  w-100 overflow-hidden">
            <div className="text-white d-flex power-tools-title justify-content-center p-2 font-25">
                <span >Everything starts here</span>
            </div>
            <>
                <img className="img-fluid power-tools-tunnle overflow-hidden" src={`${internationalAssets}/img/8.png`} alt="" />
                <div className=" d-flex justify-content-center text-dark font-22 ">
                    <span className="power-tools-title-backwhite ">Power Tools</span>
                    <div className="descriptionpowertools-box-test descriptionpowertools-image">

                    </div>
                    <p className=" text-dark descriptionpowertools-description font-13 font-weight-bold text-justify">
                        The need to construct and build has made us what we called “Human”. Mankind started using hand-held tools to drill, screw and destruct structures. As the time went by, tools got developed and became a combination of a powerful motor and a manual tool, which today we know them as “Power Tools”. They give us power, beyond our physical strength. Housing, switches, motor’s speed controllers and many other feature, are designed just to make your job done without any harm or mistake. No matter what you are intended to do, whether tightening a little screw or make a big whole on the wall, you need power tools in your hands.<br></br>

                        Since 2005, Ronix has become a leading company in the World by investing the time and energy to create efficient proportions of quality, variety and logical pricing system in power tools. These three factors made us what we are today. Based on global standards and with the help of our vast experience and extended background, we produce a variety of high-quality products, through our more than 500 suppliers in more than 12 countries.

                </p>
                </div>
               
            </>
            <p className="text-white power-tools-scroll-down mb-4">Scroll Down</p>
            <div className='icon-scroll'></div>
        </section>
    )
}
export default TunnelSection;