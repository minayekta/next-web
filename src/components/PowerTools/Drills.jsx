import { Fragment } from 'react';
import { internationalAssets } from '../../../next.config';
import VideoYoutube from '../Home/VideoYoutube';

const Drills = () => {
    return (
        <Fragment>
            <section className="drills w-100 d-flex  justify-content-center align-items-center overflow-hidden">
                <div className="py-4 position-absolute col-6 parent-z-index">
                    <div className="border-set-right"></div>
                    <div className="box-back-opacity drills-text-opacity-change">
                        <span className=" text-dark title-font col-12 font-weight-bold">DRILLS</span>
                        <p className=" text-dark col-12 font-16  font-weight-bold text-justify">
                            Maybe making a small hole in a wall seems like an easy task, but this simple action can do bigger things. Carpenters, construction laborers, and electricians build houses by starting to simply drill holes in the wall. Therefore, we all can find different types of drills in construction units and our own houses. Willing to hang a picture on the wall? You need to drill. To say it short, it is impossible to have a modern life without the need for power drills. The growing demand for high-quality drills had led us, the Ronix family, to fulfill our customers’ needs and produce varied types of drills. That is to say, they all have been designed to get the job done flawlessly. But a question that everyone would ask themselves, “Which one should I get”? The answer to this question is there in our detailed product catalog, created just to make your purchase easier.
                </p>
                    </div>
                </div>
                <div className="row ">
                    <div className="offset-3 d-flex align-items-center  col-md-6  drills-offset-top">
                        <div className="w-100 px-0  drills-select  d-flex align-items-center">
                            <div className="col-6  mx-5">
                                <img  src={`${internationalAssets}/img/Drills1.svg`} alt="" className="img-fluid position-relative drills-img1" />
                            </div>
                            <div className="col-6  mx-5">
                                <img src={`${internationalAssets}/img/Drills2.svg`} alt="" className="img-fluid position-relative drills-img2" />
                            </div>
                            <div className="col-6  mx-5">
                                <img src={`${internationalAssets}/img/Drills3.svg`} alt="" className="img-fluid position-relative drills-img3" />
                            </div>
                            <div className="col-12 mx-3 ">
          <VideoYoutube Src='//www.youtube.com/embed/Bdi3PuqH1QY' />

                                {/* <img src={`${internationalAssets}img/Drills4.svg`} alt="" className="img-fluid position-relative " /> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 layout-z-index"></div>


                </div>

            </section>
            <section className="drills-video-text-background pb-5">
                <div className="offset-3 col-6 p-0">
                    <p className="m-0 col-md-12  text-dark font-16 font-weight-bold drills-video-text px-0 text-justify">
                        Whether you want to cut a large piece of wood or pruning your garden trees, build a tree house for your kids or bring down an old wall, Ronix will proudly be with you along the whole journey. With a variety of more than 2000 products, Ronix is an international brand inspired by innovation, knowledge, technology and hard work, offering powerful and high-quality tools to many countries around the world. To meet the needs of users anywhere in the world, we have tailored to the high productivity of our products, affordable prices and greater efficiency, so that anyone with any budget at any level, from home or at site, can use Ronix easily.

                        We will be at your disposal where ever the sound of a device does not come from far away. Ronix cordless tools among power tools are manufactured with advanced technology to use power anywhere in the world or even beyond the needs of users.

                        In deep insights, we all know that these are the tools that build up the world, fix it, and take it to higher levels. At Ronix, we believe that making a better tool is for making a better world. To build and grow
</p>
                </div>
            </section>
        </Fragment>
    )
}
export default Drills;