const TagsPopUp = (props) => {
    let customClass = '';
    if (props.className !== undefined) {
        customClass = props.className;
    }
    return (
        <div id={props.id} style={{ display: 'none' }} className={'col-12 px-0 popup'}>
            <div className={customClass + ' popup-box bk-white'}>
                {/* <div className={' font-16 c-white py-2 col-12 px-0 text-center'}>
                    <span>{props.popupTitle}</span>
                    <span onClick={closeTagsPopup} className={'d-inline-block close-btn cursor-pointer'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33.941" height="33.941" viewBox="0 0 33.941 33.941">
                            <g id="Group_2263" data-name="Group 2263" transform="translate(-3552.529 50.971)">
                                <g id="Group_2262" data-name="Group 2262">
                                    <rect id="Rectangle_853" data-name="Rectangle 853" width="29" height="29" transform="translate(3555 -48)" fill="#ed1c24" />
                                </g>
                                <g id="add-24px_5_" data-name="add-24px (5)" transform="translate(3552.529 -34) rotate(-45)">
                                    <path id="Path_1706" data-name="Path 1706" d="M0,0H24V24H0Z" fill="none" />
                                    <path id="Path_1707" data-name="Path 1707" d="M19,13H13v6H11V13H5V11h6V5h2v6h6Z" fill="#fff" />
                                </g>
                            </g>
                        </svg>
                    </span>
                </div> */}
                <div className={'col-12 bk-white px-0'}>{props.children}</div>
            </div>
            <div onClick={closeTagsPopup} className={'overlay-popup'}></div>
        </div>
    );
}
export default TagsPopUp;
export const openTagsPopup = (popup_id) => {
    jquery('#' + popup_id).fadeIn(300);
}
export const closeTagsPopup = () => {
    jquery('.popup').fadeOut(300);
}