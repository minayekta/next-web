
import Image from 'next/image';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TiltSlider2 from "./TiltSlider2";
import {
  isBrowser,
  isMobile,
  isTablet,
} from "react-device-detect";
import { Fragment, useEffect , useState } from 'react';
const options = {
  max: 20,
  perspective: 2500,
  scale: 1.1,
};

export default function SlideShow({slideImages}) {
  const [showMobile, setShowMobile] = useState(0)
  useEffect(() => {
    if (isTablet || isBrowser) {
      setShowMobile(1)
      return false
    }
    else if (isMobile) {
      setShowMobile(2)
    }
  })
  return (

showMobile==1?
<Carousel
infiniteLoop={true}
autoFocus={true}
showThumbs={false}
showStatus={false}
useKeyboardArrows
showIndicators={false}
>
<div className="slideshow-container">
<img alt="Slider" src={"/assets/img/christmas-Banner-Desktop.jpg"} className="slideshow-container-img" quality={1}/>
<div className="slideshow-animation">
<TiltSlider2 options={options}>
  <div>
  <img  alt="Slider"  src="/assets/img/christmas-Banner-Desktop.jpg"/>
  </div>
</TiltSlider2>
</div>
</div> 
{slideImages.map((slide,index)=>
<div className="slideshow-container">
{index==0?<img alt="Slider" src={slide.image} className="slideshow-container-img" quality={1}/>:
<Image alt="Slider"  width={1917} height={937} src={slide.image} className="slideshow-container-img" quality={1}/>} 
<div className="slideshow-animation">
<TiltSlider2 options={options}>
  <div>
  <img  alt="Slider"  src={slide.image}/>
 
  <div class="slideshow-content">
    <p class="slideTitle">{slide.title}</p>
    <p class="slideSubtitle">{slide.subtitle}</p>
    <p class="slideDescription">{slide.description}</p>
  </div>
  </div>
  
</TiltSlider2>
</div>
</div>
)} </Carousel>:
<Carousel
infiniteLoop={true}
autoFocus={true}
showThumbs={false}
showStatus={false}
useKeyboardArrows
showIndicators={false}
>

<div className="slideshow-container">
<img alt="Slider" src={"/assets/img/christmas-Banner-Mobile.jpg"} className="slideshow-container-img" quality={1}/>
<div className="slideshow-animation">
<TiltSlider2 options={options}>
  <div>
  <img  alt="Slider"  src="/assets/img/christmas-Banner-Mobile.jpg"/>
  </div>
</TiltSlider2>
</div>
</div> 

{slideImages.map((slide,index)=>
<div className="slideshow-container">
{index==0?<img alt="Slider" src={slide.image} className="slideshow-container-img" quality={1}/>:
<Image alt="Slider"  width={1917} height={937} src={slide.image} className="slideshow-container-img" quality={1}/>} 
<div className="slideshow-animation">
  <TiltSlider2 options={options}>
    <div>
    <img  alt="Slider"  src={slide.image}/>
   
    <div class="slideshow-content">
      <p class="slideTitle">{slide.title}</p>
      <p class="slideSubtitle">{slide.subtitle}</p>
      <p class="slideDescription">{slide.description}</p>
    </div>
    </div>
    
  </TiltSlider2>
</div>
</div>)}
</Carousel>




   
      
    
   
    
 
  
  );
}
    