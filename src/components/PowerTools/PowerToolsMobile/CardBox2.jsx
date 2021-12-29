import React from 'react';
import Scrollbars from 'react-custom-scrollbars';


const CardBox2 = (props) => {
    return (
        <div className={props.classname}>

            <div className={props.classP}>
                <h4 itemProp="name" className="font-weight-bold h6 wow fadeInUp ">{props.CardBox2Title}</h4>
                <div className="scroll-box  overflow-hidden" data-height="400" data-theme="dark-thick">
                    <p className="text-justify wow fadeInUp">
                        <Scrollbars className="ScrollBar-Box" autoHeightMin={-3} autoHide={true}>
                            {props.CardBox2Paragraph}
                            <br /><br /><br /><br />
                        </Scrollbars>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardBox2;