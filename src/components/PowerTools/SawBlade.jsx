import React from 'react';
import { internationalAssets } from '../../../next.config';



const SawBlade = () => {
    return (
        <div className=" bg-white py-3">
            <div className="container ">
                <div className="row">
                    <div className="col-12 mb-3">
                        <img className='img-fluid' src={`${internationalAssets}/img/saw.svg`} alt="" />
                    </div>
                    <div className="col-6 mt-3">
                        <span className="font-47 font-weight-bold">Drill Bits</span>
                        <p className="font-weight-bold font-16 text-justify">
                            One of the most popular accessories in power tools is drill bits. They come in a wide range of sizes and are available in a variety of shapes and materials. The typical drill bits have 4 main parts, which knowing each one is essential for anyone who wants to work with a drill. From top to bottom, the tip is the sharp starting point of a drill bit that would hit the surface first. The sharp part that do the cut is called the lip of the drill. Third part is called flute (also called chip channels), which is the groove in the drill bit, allowing all the dust from drilling to get out. Wider and deeper flutes can make bigger holes. Last part of drill bit is the shank, the part that will be attached to the chuck or the bit holder. There are many different kinds of drill bits in market, then we can see other additional parts on them too. An important thing to know before you buy any extra drill bit is: your chuck capacity will determine which size of drill you can buy. If your chuck capacity is 13mm, then you can use a maximum size of 13mm drill bit for it. Keep that in mind!
<br></br>
Another high-demand accessory in power tools are saw blades. Every professional knows which saw blade goes with which material. In order to have a more precise and cleaner cut, choose your saw blade carefully.
                    </p>
                    </div>
                    <div className="col-6 mt-3">
                        <span className="font-47 font-weight-bold">Saw Blade</span>
                        <p className="font-weight-bold font-16 text-justify">
                            Saw blades of varied based on their production material or the teeth shapes. There are many other factors to know about. For sawing there are TCT blade and for cutting operation we have fiber blades. Depends on what material you want to cut, the number of tooth on the blade can change. In general, having more teeth is better for cutting metal and fewer teeth is good for wood or softer materials. Also, if the teeth are bigger and have wider gullets (the space between each tooth on the blade), it is more likely to be a blade for cutting woods. Last but not least, it is the tooth angle. We use the term “positive/negative hook angle” for these teeth. If you want to have a more aggressive blade, choose the one with more positive hook angle, meaning that the teeth lean forward, same direction as blade rotation. So to say it shortly, you can find out which blade suits the work by specifying the shape, number, gullet and angle of the teeth. You can find all kinds of blades in our power tools accessories.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SawBlade;