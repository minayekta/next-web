import $ from 'jquery';
const PopUp = (props)=>{
    let customClass='';
    if (props.className!==undefined){
        customClass=props.className;
    }
    return(
        <div id={props.id} style={{display:'none'}} className={'col-12 px-0 popup'}>
            <div className={props.customClass + ' popup-box'}>
                <div className={'col-12 px-0 px-xl-4'}>{props.children}</div>
            </div>
            <div onClick={props.closePopup} className={'overlay-popup'}></div>
        </div>
    );
}
export default PopUp;
export const openPopup=(popup_id)=>{
    $('#'+popup_id).fadeIn(300);
}