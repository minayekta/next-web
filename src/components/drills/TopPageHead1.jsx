import React from 'react';


const TopPageHead1 = (props) => {
    return (
        <React.Fragment>
            <div className="pt-5 pb-3   overflow-hidden">
                <h1 itemProp="name" className="display-1 text-uppercase font-weight-bold text-center text-white wow slideInUp page-title-2">
                    {props.title}
                </h1>
            </div>
            <div className="row overflow-hidden">
                <div className="col-12 ">
                    <div className="wide mb-5 overflow-hidden">
                        <img itemProp="image" width={props.width} height={props.height} className="d-block mx-auto wow zoomIn" src={props.src} alt="" />
                    </div>
                    <p itemProp="description" className="text-justify text-white wow slideInLeft">
                    <span dangerouslySetInnerHTML={{__html: props.paragraph}} />
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default TopPageHead1;