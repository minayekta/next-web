import React from 'react';
import {internationalAssets} from '../../../next.config';



const SectionThreeBox = () => {
    return (
        <section className="bg-white  py-4">
            <div className="container pb-5 pt-3">
                <div className="col-12 d-flex flex-wrap">
                    <div className="col-4">
                        <div className="row">
                            <img src={`${internationalAssets}/img/drill.svg`} alt="" className="img-fluid col-12" />
                            <h4 className="col-12 my-3">Have you ever heard of a 'torque control ring'?</h4>
                            <p className="col-12 font-15 font-weight-bold text-justify">Each power tool with the screwing function has a torque control ring that allows the user to control the torque level, depends on the size of the screw or how solid your material is. This part would be helpful in a situation when your screw is fully driven into the surface, and if the level has been selected reasonably, by keeping on screwing, your screw would just release. This part is placed next to the chuck. The higher you select the level, the stronger the screwing force is. That is to say, make sure you start with lower levels to avoid damage if you already do not know the proper level. Knowing different parts of your power tool takes you another step closer to become a pro. Then take the first steps and download our full-detailed catalog for more information. Ronix is also well-known for having a wide range of cordless tools, just for you to get your job done, easier than ever.</p>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className="row">
                            <img src={`${internationalAssets}/img/drill.svg`} alt="" className="img-fluid col-12" />
                            <h4 className="col-12 my-3">Drills item code</h4>
                            <p className="col-12 font-15 font-weight-bold text-justify">As mentioned before, our power tools each have their own code item so that you can easily find out about their functions. For example, our drills (starting with the number ‘2’) with screwing function have the number ‘5’ as the second digit, and our cordless drills usually start with the number ‘8’. However, this can change due to other functions they may have. As the wide variety of cordless tools have, we will talk more about it in the next section. All information you’ll ever need!</p>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className="row">
                            <img src={`${internationalAssets}/img/drill.svg`} alt="" className="img-fluid col-12" />
                            <h4 className="col-12 my-3">Drills item code</h4>
                            <p className="col-12 font-15 font-weight-bold text-justify">As mentioned before, our power tools each have their own code item so that you can easily find out about their functions. For example, our drills (starting with the number ‘2’) with screwing function have the number ‘5’ as the second digit, and our cordless drills usually start with the number ‘8’. However, this can change due to other functions they may have. As the wide variety of cordless tools have, we will talk more about it in the next section. All information you’ll ever need!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionThreeBox;