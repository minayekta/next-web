import { assetPrefix } from "../../../../next.config";

const PopUp = (props) => {
    let customClass = '';
    if (props.className !== undefined) {
        customClass = props.className;
    }
    return (
        <div id={props.id} style={{ display: 'none' }} className={'col-12 px-0 popup'}>
            <div className={customClass + ' popup-box bk-white'}>
                <div className={'popup-header font-16 c-white py-2 col-12 px-0 text-center'}>
                    <span>{props.popupTitle}</span>
                    <span onClick={closePopup} className={'d-inline-block close-btn cursor-pointer'}>
                       <img src={`${assetPrefix}/assets/img/close_1.svg`}/>
                    </span>
                </div>
                <div className={'col-12 bk-white px-0'}>{props.children}</div>
            </div>
            <div onClick={closePopup} className={'overlay-popup'}></div>
        </div>
    );
}
export default PopUp;
export const openPopup = (popup_id) => {
    jquery('#' + popup_id).fadeIn(300);
}
export const closePopup = () => {
    jquery('.popup').fadeOut(300);
}