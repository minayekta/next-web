import React from 'react';

import {internationalAssets} from '../../../next.config';

const Rotray = () => {
    return (
        <div className=" Rotray h-auto d-flex align-items-center">
            <div className="container">

                <div className="row py-5 px-4">
                    <div className="col-6">
                        <img className='img-fluid' src={`${internationalAssets}/img/Rotray.svg`} alt="" />
                    </div>
                    <div className="col-6  m-auto">
                        <span className="col-12 title-font font-weight-bold">Rotray <br></br>& Demolitions</span>
                        <p className="font-16 col-12 font-weight-bold text-justify">
                            As mentioned, two popular types are: Jigsaw and Miter saw. As you may have seen, jigsaws cut by vertical motion. To be more specific, a push-and-pull motion. Some may have a blade guide roller, to control the motion of the blade horizontally too, giving an easier and faster cuts in wood. Having a dust blower is also an additional feature in jigsaws so that you have a clean surface the whole time. Ronix jigsaws are famous for their accurate and clean results and being super flexible and handy. By some of them you can even change the pendulum motion, in order to save power. In miter saws the power would be transmitted from the motor to the saw, either a gear type motor or a belt type.
                    </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Rotray;