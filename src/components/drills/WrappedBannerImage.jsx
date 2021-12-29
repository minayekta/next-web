import { useEffect } from 'react';


const WrappedBannerImage = (props) => {
   useEffect(() => {
       
   }, []);
    return (
    
            <div className="text-white wow">
                <div className="wide overflow-hidden">
                    <img width={props.width} height={props.height} itemProp="image" className="wow slideInUp" src={props.Src} alt="" />
                </div>
        </div>

    )
}
export default WrappedBannerImage;