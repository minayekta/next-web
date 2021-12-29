import { Fragment, useEffect } from 'react';


const TabularBox2 = (props) => {
    useEffect(()=>{
                let start_animation='top bottom';
                    let tl = gsap.timeline({
                        scrollTrigger: {
                        trigger: '#'+props.id,
                        start: start_animation,
                        }
                    });
                    tl.addLabel("start")
                    .from('#'+props.id+">div", {opacity:0,y: 100})
                    .to('#'+props.id+">div", {opacity:1,y: 0})
                    .addLabel("end"); 
            })
    return (
        <Fragment>
            <div id={props.id} >
            <div className="alt-transition form-row py-2 pt-5 bg-white ">
                <div className="col-md-6 mb-3 mb-md-0 overflow-hidden ">
                    <div className="wide wow slideInRight">
                        <img itemProp="image" width="550" height="367" src={props.TabularBox2Src} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <ul className="nav form-row nav-pills overflow-hidden" id="screwdrivers-tab" role="tablist">
                        <li itemProp="itemListElement" itemScope="" className="nav-item col-md-4 col-mb wow slideInUp" role="presentation">
                            <a itemProp="item" className="nav-link text-center active " id="screwdrivers-shape-tab" data-toggle="pill" href="#screwdrivers-shape" role="tab" aria-controls="screwdrivers-shape" aria-selected="true">{props.BtnTextLeft}</a>
                        </li>
                        <li itemProp="itemListElement" itemScope="" className="nav-item col-md-4 col-mb wow slideInUp leftAndRight" role="presentation">
                            <a itemProp="item" className="nav-link text-center" id="screwdrivers-size-tab" data-toggle="pill" href="#screwdrivers-size" role="tab" aria-controls="screwdrivers-size" aria-selected="false">{props.BtnTextMiddle}</a>
                        </li>
                        <li itemProp="itemListElement"  itemScope="" className="nav-item col-md-4 col-mb wow slideInUp leftAndRight" role="presentation">
                            <a itemProp="item" className="font-12 p-0 nav-link text-center" id="screwdrivers-handles-tab" data-toggle="pill" href="#screwdrivers-handles" role="tab" aria-controls="screwdrivers-handles" aria-selected="false">{props.BtnTextRight}</a>
                        </li>
                    </ul>
                    <div className="tab-content overflow-hidden" id="pills-tabContent">
                        <div className="tab-pane bg-white text-dark fade show active wow slideInUp" id="screwdrivers-shape" role="tabpanel" aria-labelledby="screwdrivers-shape-tab">
                            <p itemProp="description" className="text-justify">
                                {props.TabularBox2Paragraph}
                            </p>
                        </div>
                        <div className="tab-pane bg-white text-dark fade active show" id="screwdrivers-size" role="tabpanel" aria-labelledby="screwdrivers-size-tab">
                            <p itemProp="description" className="text-justify">
                                {props.TabularBox2Paragraph2}
                            </p>
                        </div>
                        <div className="tab-pane bg-white text-dark fade" id="screwdrivers-handles" role="tabpanel" aria-labelledby="screwdrivers-shape-tab">
                            <p itemProp="description" className="text-justify">
                            {props.TabularBox2Paragraph3}
                        </p>
                        </div>
                    </div>
                </div>
            </div></div>
        </Fragment>
    )
}
export default TabularBox2;