import React from 'react';
import Scrollbars from 'react-custom-scrollbars'

const CardBox1 = (props) => {

    return (
        <div className={props.classColmd}>
            <div className={props.classCol}>
                <div className="py-2" data-height="400" data-theme="light-thick">
                    <div className="img-box wide mb-4  overflow-hidden">
                        <img itemProp="image" className="img-fluid wow fadeInUp" width={props.width} height={props.height} src={props.CardSrc} alt="" />
                    </div>
                    <h4 itemProp="name" className="c-black wow fadeInUp fontT">{props.CardTitle}</h4>
                    {/* <Scrollbars  autoHeightMin={-3} autoHeightMax={400}>
                      
                    </Scrollbars> */}
                    <div className="overflow-hidden">
                        <p itemProp="description" className="text-justify   c-black fadeInUp wow">
                            <Scrollbars className="ScrollBar-Box" autoHeightMin={-3} autoHide={true}>
                                <span dangerouslySetInnerHTML={{ __html: props.CardParaghraph }} /> <br />
                                <span dangerouslySetInnerHTML={{ __html: props.CardParaghraph2 }} /><br />
                                <span dangerouslySetInnerHTML={{ __html: props.CardParaghraph3 }} />
                            </Scrollbars>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardBox1;