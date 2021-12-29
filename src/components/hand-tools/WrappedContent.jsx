import React from 'react';
import Scrollbars from 'react-custom-scrollbars';


const WrappedContent = (props) => {
    return (
        <div className="container">
            <div className={props.reverse}>
                <div className={props.reverse1}>
                    <h2 itemProp="name" className={props.pstyle}> {props.title}</h2>
                    <div className="scroll-box " data-height="220" data-theme="dark-thick">
                        <p itemProp="description" className="text-justify wow slideInUp">
                            <Scrollbars className="ScrollBar-Box" autoHeightMin={-3} autoHide={true}>
                                {props.paragraph}
                            </Scrollbars>
                        </p>
                    </div>
                </div>
                <div className={props.reverse2}>
                    <div className="img-box wide overflow-hidden" >
                        <img itemProp="image" className="wow zoomIn" width="540" height="340" src={props.src} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WrappedContent;