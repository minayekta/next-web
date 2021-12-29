import React from 'react';


const WrapperdTitleH4 = (props) => {
    return (
            <div className="row">
                <div className="col-12 overflow-hidden mt-3 px-4">
                    <h4 itemProp="name" className={props.classh1}>{props.title}</h4>
                </div>
            </div>
    )
}
export default WrapperdTitleH4;