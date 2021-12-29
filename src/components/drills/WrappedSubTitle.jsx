import React from 'react';


const WrapperdSubTitle = (props) => {
    return (
        <div className=" overflow-hidden">
            <div className="  pt-3 wow slideInUp">
                <h3 itemProp="name" className={props.classname}>
                    {props.h1}
                </h3>
            </div>
            <div className="mb-5 wow slideInUp">
            <b>{props.titr}</b>
                <p itemProp="description" className="text-justify">
                <span dangerouslySetInnerHTML={{__html: props.Paragraph}} />
                </p>
            </div>
        </div>
    )
}

export default WrapperdSubTitle;