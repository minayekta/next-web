import { data } from "jquery";
import { assetPrefix, isRtl } from "../../../next.config";
import TitlesFieldset from "../common/Titles/TitlesFieldset";
import TagItem from './../../components/common/Tags'
const Tags = (props) => {
    return (
        <div className='prduct-detail-tags pt-5 col-12 bk-white border-top'>
            <div className='container'>

                <TitlesFieldset titleContent={props.title} titleClass={`mt-1 font-18 mb-4 c-black d-flex justify-content-between alighn-items-center`} />
                {props.data.map((item) => {
                    return (
                        <TagItem key={item.id} rtl={isRtl} className={props.isRtl ? 'ml-4' : 'mr-4'} link={`/tags/${item.permalink}`} text={item.title} />
                    )
                })}
            </div>

        </div>
    );
}
export default Tags;