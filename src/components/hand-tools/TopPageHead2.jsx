import { Fragment } from 'react';
import Scrollbars from 'react-custom-scrollbars';


const TopPageHead2 = (props) => {

    return (
        <Fragment>
            <div className="pt-5 pb-5 wow fadeInUp">
                <h1 itemProp="name" className=" text-dark text-uppercase font-weight-bold text-center ">
                    {props.title}
                </h1>
            </div>
            <div className="m-0 overflow-hidden">
                <div className="wow fadeInUp">
                    <div className="img-box">
                        <img itemProp="image" width={props.width} height={props.height} className="d-block mx-auto img-fluid" src={props.src} alt="" />
                    </div>
                </div>
                <div className=" wow fadeInUp mt-3">
                    <div data-height="250" data-theme="light-thick">
                        <p itemProp="description" className="text-justify">
                            <Scrollbars className="ScrollBar-Box text-dark" autoHeightMin={-3} autoHide={true}>

                                <span dangerouslySetInnerHTML={{ __html: props.paragraph }} />
                            </Scrollbars>
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TopPageHead2;