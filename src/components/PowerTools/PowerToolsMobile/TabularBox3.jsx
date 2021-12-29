import { Fragment, useEffect } from 'react';


const TabularBox3 = (props) => {
    useEffect(() => {
        let start_animation = 'top bottom';
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".TabularBox3",
                start: start_animation,
                offset: 500
            }
        });
        tl.addLabel("start")
            .from(".TabularBox3>div", { opacity: 0, y: 100 })
            .to(".TabularBox3>div", { opacity: 1, y: 0 })
            .addLabel("end");
    });
    return (
        <Fragment>

            <div className="row no-gutters bg-light TabularBox3" >
                <div className="col-md-6 p-3 mb-3 mb-md-0 overflow-hidden ">
                    <div className="wide ">
                        <img itemProp="image" width="523" className="img-fluid" height="381" src={props.TabularBox3Src} alt="" />
                    </div>
                </div>
                <div className="col-md-6 p-3 overflow-hidden" >
                    <ul className="nav form-row nav-pills" id="spirit-level-tab" role="tablist">
                        <li className="nav-item col col-mb wow slideInUp" role="presentation">
                            <a className="nav-link text-center active font-responsive" id="spirit-level-one-tab" data-toggle="pill" href="#spirit-level-one" role="tab" aria-controls="spirit-level-one" aria-selected="true">{props.BtnTextLeft}</a>
                        </li>
                        <li className="nav-item col  col-mb wow slideInUp" role="presentation">
                            <a className="nav-link  text-center font-responsive" id="spirit-level-two-tab" data-toggle="pill" href="#spirit-level-two" role="tab" aria-controls="spirit-level-two" aria-selected="false">{props.BtnTextRight}</a>
                        </li>
                    </ul>
                    <div className="tab-content overflow-hidden" id="pills-spiritTabContent">
                        <div className="tab-pane p-3 bg-light text-dark fade show active wow slideInUp" id="spirit-level-one" role="tabpanel" aria-labelledby="spirit-level-one-tab">
                            <p itemProp="description " className="text-justify">
                                {props.TabularBox3Paragraph}
                                <br></br>
                                <br></br>
                                {props.TabularBox3Paragraph1}
                            </p>
                        </div>
                        <div className="tab-pane p-3 bg-light text-dark fade " id="spirit-level-two" role="tabpanel" aria-labelledby="spirit-level-two-tab">
                            <p itemprop="description" className="text-justify">
                                {props.TabularBox3Paragraph2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default TabularBox3;