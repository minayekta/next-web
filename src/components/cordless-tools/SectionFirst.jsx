import { Fragment } from 'react';
import { assetPrefix, internationalAssets } from '../../../next.config';


const SectionFirst = () => {


    return (
        <Fragment>
            <section className=" SectionFirst bg-white pt-5 overflow-hidden">
                <video autoPlay muted className="cordless-video col-12 p-0" src={`${internationalAssets}/video/Cordless Tools.mov`}></video>
                <div className="col-12 pt-4 text-center">
                    <p className="cordless-title">CORDLESS TOOLS</p>
                </div>
                <div className="col-12 d-flex justify-content-center mb-3">
                   <img className="img-fluid" src={`${assetPrefix}/assets/img/Cordless-tools.jpg`} alt=""/>
                </div>
                <div className="col-6 offset-3  font-13 font-weight-bold cordless-paragraph">
                    <p className="text-one">
                        For many years flying was something that people dreamt of anywhere around the world. We were obsessed with it for a long time, trying so hard to achieve it. And now, it is in our hands, with just a few clicks we can buy a plane ticket and travel to another part of the globe. Space travel and going into space was another impossible dream of ours that came to reality. We have walked on the moon, split the atom and, connected people around the world to each other via the Internet. We have been progressing tirelessly and steadily, and from the first moments, we have been breaking limits. We have been able to do all this with just tools. So, for us, limits are meaningless, since better tools are the only things we need to go beyond limits. This is why Ronix has dedicated its efforts to designing and manufacturing high-quality tools for breaking new limits.</p>
                    <p className="text-two m-0">
                        Cordless tools are one of those inventions that have liberated us and allowed us to break the barriers and overcame the impossible. Imagine a professional mechanic working in a super tight space under a car. It is really hard to work with a regular drill because the cord gets in the way. Or picture a person that has to work at height outside of a building. How difficult finding a source of electricity would be? How long would the cable need to be? In these situations that the working environment is extremely hard, having a cordless tool is a superior advantage that lets you get the job done faster and easier. Imagine not needing a source of electricity, isn’t it thrilling?
                        As tasks become more professional and precise, the need for better and high-quality cordless tools increases. Have you ever wondered where cordless tools were first used? It is interesting to know that one of the first and most famous places that cordless tools were used, was on spacecrafts. As there is limited space on a rocket, everything needs to be as compact as possible. Therefore, these tools could (and still can) go a long way in spaceships.
Cordless tools are produced in various categories. Nowadays, almost every power tool has a cordless model, from impact drills and screwdrivers to jigsaws and miter saws. The further we go, the more apparent the importance of cordless tools becomes. Because of this, focusing on the improvement of different features is essential. To build the perfect experience and help you in different situations, whether you are working on a rainy day or up on a tree, Ronix manufactures water-resistant and anti-shock cordless tools to support you anywhere</p>
                </div>
            </section>
        </Fragment>
    )
}

export default SectionFirst;