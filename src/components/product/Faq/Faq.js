
const TitlesFieldset = dynamic(() => import('./../../common/Titles/TitlesFieldset'));
import { data } from "jquery";
import dynamic from "next/dynamic";
import FaqItem from "./FaqItem";

const Faq = (props) => {
    return (
        <div className='col-12 pt-5 px-0 bk-white'>
            
            <div className='container faq-section'>
            <TitlesFieldset titleContent={props.title} titleClass={'font-18 c-black d-flex justify-content-between align-items-center m-0'} />
                {props.data.map((item, index) => {
                    return (
                        <FaqItem  key={item.id} question={item.question} answer={item.answer} className={`${props.isRtl?'pl-5 pr-0':'pr-5 pl-0'}`} key={index} id={index} />
                    );
                })}
            </div>
        </div>
    )
}
export default Faq;