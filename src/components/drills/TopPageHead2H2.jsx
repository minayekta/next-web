import React from 'react';
import Scrollbars from 'react-custom-scrollbars';


const TopPageHead2H2 = (props) => {

    return (
        <React.Fragment>
            <div className="pt-3 pb-5 wow fadeInUp">
                <h2 itemProp="name" className="display-1 text-uppercase font-weight-bold text-center ">
                    {props.title}
                </h2>
            </div>
            <div className="row overflow-hidden">
                <div className="col-md-6 col-12 wow fadeInUp">
                    <div className="img-box">
                        <img itemProp="image" width={props.width} height={props.height} className="d-block mx-auto wow" src={props.src} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-12 wow fadeInUp mt-3">
                    <div  data-height="250" data-theme="light-thick">
                        <p itemProp="description" className="text-justify">
                        <Scrollbars className="ScrollBar-Box" autoHeightMin={-3} autoHide={true}>

                                <span dangerouslySetInnerHTML={{ __html: props.paragraph }} />
                                </Scrollbars>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TopPageHead2H2;