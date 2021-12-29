import React from 'react';

const TabularBox1 = (props) => {
    return (
        <div className=" pt-5" >
            <ul className="nav form-row nav-pills light" id="griding-tab" role="tablist">
                <li className="nav-item col col-mb" role="presentation">
                    <a className="nav-link text-center active" id="griding-one-tab" data-toggle="pill" href="#griding-one" role="tab" aria-controls="griding-one" aria-selected="true">
                        {props.titleleft}
                        ?</a>
                </li>
                <li className="nav-item col col-mb" role="presentation">
                    <a className="nav-link text-center" id="griding-two-tab" data-toggle="pill" href="#griding-two" role="tab" aria-controls="griding-two" aria-selected="false">
                        {props.titleright}
                        </a>
                </li>
            </ul>
            <div className="col-mb wow fadeInUp tab-content" id="pills-gridingTabContent">
                <div className="tab-pane p-3 bg-white text-dark fade active show" id="griding-one" role="tabpanel" aria-labelledby="griding-one-tab">
                    <p itemProp="description" className="text-justify">
                        {props.paragraph}
                    </p>
                </div>
                <div className="tab-pane p-3 bg-white text-dark fade" id="griding-two" role="tabpanel" aria-labelledby="griding-two-tab">
                    <p itemprop="description" className="text-justify">
                        {props.paragraph1}
                    </p>
                </div>
            </div>
        </div>

    )
}
export default TabularBox1;