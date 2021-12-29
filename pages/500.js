import { assetPrefix } from "../next.config";

const Custom500 = () => {
    return (
        <div className='custome-500 col-12 px-0'>
            <div className='container'>
                <div className='col-12 my-5 px-0 col-md-10 offset-md-1 col-xl-8 offset-xl-2 px-0 text-center'>
                    <img className='img-fluid d-none d-md-inline' src={`${assetPrefix}/assets/img/general-img/error-pages/error-500-2.png`} />
                    <p className='c-white d-md-none font-22 text-left mb-5'>
                        Oops!
                        <br />
                        Somting is technically wrong
                        <br />
                        We are investigating the prlem and will be back soon
                    </p>
                    <img className='img-fluid d-md-none' src={`${assetPrefix}/assets/img/general-img/error-pages/error-500-mobile.png`} />
                </div>
            </div>
        </div>
    );
}
export default Custom500;