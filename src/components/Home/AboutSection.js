import Image from 'next/image';
import { assetPrefix, currentlanguageCode, isRtl } from '../../../next.config';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
const AboutSection = () => {
    const myLoader = ({ src,height, width, quality }) => {
        return `${assetPrefix}/_next/image?url=${src}&w=${width}&q=${quality || 75}`
      }
    return (
        <section className={`back-image px-0 px-xl-4 col-12 py-5 ${isRtl ? 'ltr' : ''}`}>
            <div className="container d-flex justify-content-center w-75" >
                <div className='col-12 px-0 px-xl-4  py-5 my-4'>
                    <div className='col-12 px-0 d-xl-flex equal border-r-4 overflow-h'>
                        {/* <div className='col-12 col-xl-7 px-0'> */}
                        <Image loader={myLoader} width={771} height={617} quality={100}  eager className='col-12 col-xl-7 px-0 img-fluid' src={`/assets/img/about-img.png`} />
                        {/* </div> */}
                        <div className='col-12 col-xl-5 bk-white d-flex align-items-center'>
                            <div className='col-12 px-0 text-left'>
                                <p className={'font-22 c-grayB font-weight-bold mt-4 mt-xl-0 mb-2'}>{text.About}</p>
                                <p className={'font-30 font-weight-bold c-red pr-5 line-height-1'}>{`${text.RonixToolsCompany}`}</p>
                                <p className='font-weight-bold font-13'>{text.CompanyDescription}</p>
                                <div className="col-12 text-left px-0">
                                    <a href={`https://ronixtools.com/${currentlanguageCode}/company`} className='px-4 cursor-pointer py-2 mt-4 d-inline-block btn-red bk-red border-r-4 font-14 c-white'>
                                        <span className='c-white'>
                                            {text.ViewMore}
                                        </span>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutSection;