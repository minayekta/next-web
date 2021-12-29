import React, { useEffect, useState } from 'react';
// import {currentlanguageCode,internationalAssets,imageOptimizeServerUrl,apiDomain} from './../../../next.config';
import { currentlanguageCode, env } from './../../../next.config';
import { GetWebSiteSlideShowItemByName } from './../../components/Services/SliderService';
import Slideshow from "./slideShow";
var { text } = require('../translate-files/' + currentlanguageCode + '.json');

const MainSlider = () => {
  const [sliderTag, setSliderTag] = useState('')


  const slides = [];
  const GetSliderDataFunc = async () => {
    const body = {
      text: currentlanguageCode + 'HomePageSlider'
    }


    const res = await GetWebSiteSlideShowItemByName(body)
    console.log(res.data.response);
    res.data.response.map(item =>
      slides.push(
        {
          id: item.priority,
          title: item.title,
          subtitle: item.description,
          description: item.subTitle,
          image: `${env.apiDomain}/Images/SlideShow/` + item.imageUrl
        }
      )
    )
    //  setSliderTag(<TiltSlider slidesReducer={slidesReducer} slides={slides} />)
    setSliderTag(<Slideshow slideImages={slides}></Slideshow>)

  }
  useEffect(() => {
    GetSliderDataFunc()
  }, [])

  // const slidesReducer = (state, event) => {
  //   if (event.type === "NEXT") {
  //     return {
  //       ...state,
  //       slideIndex: (state.slideIndex + 1) % slides.length
  //     };

  //   }
  //   if (event.type === "PREV") {
  //     return {
  //       ...state,
  //       slideIndex:
  //         state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
  //     };

  //   }
  // };

  return (
    <div>
      <div className='slider-container'>
      {sliderTag}


      </div>

      {/* <link
        href='https://fonts.googleapis.com/css?family=Open+Sans'
        rel='stylesheet'
      /> */}

      {/* <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'
      />
      {/* <link rel='stylesheet' href='./style.css' /> */}
{/* 
      <script src='https://cdnjs.cloudflare.com/ajax/libs/react/16.11.0/umd/react.production.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.11.0/umd/react-dom.production.js'></script> */}
    </div>
  );
};
export default MainSlider;
