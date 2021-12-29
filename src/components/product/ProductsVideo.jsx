import { useEffect } from "react";
import { assetPrefix, productImageUrl } from "../../../next.config";
import VideoSection from "./VideoSection";

const ProductsVideo = ({ ProductDetail, isMobile, title }) => {
    return (
        <div>
            {
                ProductDetail.videos.length >= 1 ?
                    <VideoSection title={title} isMobile={isMobile} productCode={ProductDetail.code} videosData={ProductDetail.videos} mockImage={`${assetPrefix}/assets/img/cover/cover-2.jpg`} productImageUrl={productImageUrl} />
                    : null
            }
        </div>
    )
}

export default ProductsVideo;