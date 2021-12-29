import React from "react";
import { internationalAssets } from "../../../next.config";
import VideoYoutube from "../Home/VideoYoutube";

const SawingCuttingtools = () => {
  return (
    <section className='SawingCuttingtools  w-100 d-flex bg-white justify-content-center align-items-center overflow-hidden'>
      <div className='py-4 position-absolute col-6 '>
        <div className='border-set-right'></div>
        <div className='box-back-opacity'>
          <span className='SawingCuttingtools-title text-dark title-font col-12 font-weight-bold Reglo'>
            SAWING <br></br>CUTTING TOOLS
          </span>
          <p className='SawingCuttingtools-title text-dark col-12 font-14 font-weight-bold text-justify'>
            Just as human civilization started to form, people realized that to
            make tools, they need to know how to cut wood in advance. It is only
            then that they can build weapons, shelter, etc. The original saws
            were made from tipped stone, which finally left unpleasant scratches
            around the cut despite the huge effort. High demand for cutting and
            the wide range of its usage made humans, once again, to search for a
            better solution: Power Tools. The modern saws were created to cut
            woods, stones, and even metal. Technology developed, and electricity
            got involved in human lives. Now you see jigsaws cutting wood in
            different shapes, and miter saws can cut in various angles. A lot
            more to mention are Chain Saws, Circular Saws, Table Saws,
            Reciprocating Saws, Tile Saws, and Cut-off Saws. If you are
            interested in Sawing or Cutting application or just looking for the
            proper tool, visit the Saws Article. If you are in need of a power
            saw, Ronix produces a variety of practical and powerful saws to suit
            your needs. Here we are going to talk about the two most famous
            types: Jigsaws and Miter Saws.{" "}
          </p>
        </div>
      </div>
      <div className='row h-75'>
        <div className='offset-3 d-flex align-items-center  col-md-6 p-0 '>
          <div className='w-100 px-0  SawingCuttingtools1 bg-white   d-flex align-items-center'>
            <div className={"col-12 mx-5 SawingCuttingtools1-Video"}>
              {/* <img
                src={`${internationalAssets}/img/Video.svg'
                alt=''
                className='img-fluid position-relative '
              /> */}
              <VideoYoutube Src='//www.youtube.com/embed/ZaHfYIP-IRc' />
            </div>
            <div
              className={
                "col-9 bg-white   d-flex align-items-center  offset-4 px-5"
              }>
              <div>
                <p className='px-4 font-30 font-weight-bold'>MITER SAWS</p>
                <p className='px-4 font-16 font-weight-bold text-justify'>
                  The other famous one among power tools is miter saw. With a
                  circular sharp blade, it cut through wood, aluminum, plastic
                  and more. This device leads the power to this circular blade
                  and some are able to cut with various angles. There are many
                  types of miter saws but the famous ones can sum up in
                  standard- and sliding saws. The sliding type have a larger
                  size capacity of which a board can be cut, by moving the saw
                  head back and forth. If you are interested in different types
                  of saws, see our products in the product menu.{" "}
                </p>
              </div>
            </div>
            <div className={"col-6 px-0 jigsaws-img"}>
              <img
                src={`${internationalAssets}/img/jigsaws.svg`}
                alt=''
                className='img-fluid position-relative '
              />
            </div>
            <div
              className={
                "col-9 bg-white   d-flex align-items-center  offset-4 px-5"
              }>
              <div>
                <p className='px-4 font-30 font-weight-bold'>JIGSAWS </p>
                <p className='px-4 font-16 font-weight-bold text-justify'>
                  As mentioned, two popular types are: Jigsaw and Miter saw. As
                  you may have seen, jigsaws cut by vertical motion. To be more
                  specific, a push-and-pull motion. Some may have a blade guide
                  roller, to control the motion of the blade horizontally too,
                  giving an easier and faster cuts in wood. Having a dust blower
                  is also an additional feature in jigsaws so that you have a
                  clean surface the whole time. Ronix jigsaws are famous for
                  their accurate and clean results and being super flexible and
                  handy. By some of them you can even change the pendulum
                  motion, in order to save power. In miter saws the power would
                  be transmitted from the motor to the saw, either a gear type
                  motor or a belt type.{" "}
                </p>
              </div>
            </div>
            <div className={"col-6 px-0 jigsaws-img2"}>
              <img
                src={`${internationalAssets}/img/jigsaws.svg`}
                alt=''
                className='img-fluid position-relative '
              />
            </div>
            <div
              className={
                "col-9 bg-white   d-flex align-items-center  offset-4 px-5"
              }>
              <div>
                <p className='px-4 font-30 font-weight-bold'>CARWASH </p>
                <p className='px-4 font-16 font-weight-bold text-justify'>
                  As mentioned, two popular types are: Jigsaw and Miter saw. As
                  you may have seen, jigsaws cut by vertical motion. To be more
                  specific, a push-and-pull motion. Some may have a blade guide
                  roller, to control the motion of the blade horizontally too,
                  giving an easier and faster cuts in wood. Having a dust blower
                  is also an additional feature in jigsaws so that you have a
                  clean surface the whole time. Ronix jigsaws are famous for
                  their accurate and clean results and being super flexible and
                  handy. By some of them you can even change the pendulum
                  motion, in order to save power. In miter saws the power would
                  be transmitted from the motor to the saw, either a gear type
                  motor or a belt type.{" "}
                </p>
              </div>
            </div>
            <div className={"col-6 px-0 jigsaws-img3"}>
              <img
                src={`${internationalAssets}/img/jigsaws.svg`}
                alt=''
                className='img-fluid position-relative '
              />
            </div>
          </div>
        </div>
        <div className='col-md-3 layout-z-index bg-white'></div>
      </div>
    </section>
  );
};
export default SawingCuttingtools;
