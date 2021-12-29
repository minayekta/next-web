import { useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import ReCAPTCHA from "react-google-recaptcha";
import { Reveal, Tween } from 'react-gsap';
import { captchaSiteKey, currentlanguageCode, isRtl } from '../../../next.config';
import { ProductInsertReview } from '../Services/productService';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');

const InsertComment = (id) => {

    const [name, setName] = useState('');
    const formref = useRef()
    const [reviewText, setReviewText] = useState('');
    const [error, setShowError] = useState(false);
    const [errorquestion, seterrorquestion] = useState(false);
    const [recaptcha, setRecaptcha] = useState(null);
    const [showRecaptcha, setShowRecaptcha] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const Captcharef = useRef(null);
    const [cookies, setCookie] = useCookies(['ronix']);

    const SubmitForm = (e) => {
        e.preventDefault();
        const insertbody = {
            "productId": id.id,
            "parentId": null,
            "author": name,
            "reviewText": reviewText,
            "cookieValue": cookies.ronix
        }
        if (name === undefined || name === null || name === '') {
            seterrorquestion(false)
            setShowError(true)
            setShowRecaptcha(false);
        }

        else if (reviewText === undefined || reviewText === null || reviewText === '') {
            seterrorquestion(true)
            setShowError(false)
            setShowRecaptcha(false);
        } else if (recaptcha == null) {
            seterrorquestion(false)
            setShowError(false)
            setShowRecaptcha(true);

        }
        else {
            async function ApiCall() {

                const Res = await ProductInsertReview(insertbody)
                setShowRecaptcha(false);
                seterrorquestion(false)
                setShowError(false);
                $('.insert-comment-submit-button').addClass('success-message');
                $('.insert-comment-submit-button').text('')
                setShowSuccess(true);
                setRecaptcha(null);
                Captcharef.current.reset();
                formref.current.reset()
            }
            ApiCall()
            setTimeout(() => {
                $('.insert-comment-submit-button').removeClass('success-message')
                $('.insert-comment-submit-button').text(text.PostComment)
                setShowSuccess(false);
            }, 2000);
        }




    }
    return (

        <Reveal threshold={.01}>
            <Tween from={{ opacity: 0, transform: 'translateY(100px)' }} to={{ opacity: 1, transform: 'translateY(0px)' }} stagger={.2} duration={.3} ease="easein(.2, 0.1)">
                <div className="col-12 col-md-6">
                    <div className="col-12 insert-comment border-r-4 h-100 bk-grayC">
                        <form ref={formref} className={`col-12 d-block d-xl-flex flex-wrap justify-content-between px-0 mt-3 ${isRtl ? ' text-right' : ''}`} style={{ direction: isRtl ? "rtl" : '' }}>
                            <div className="d-xl-flex col-12 px-0">
                                <div className="form-group px-0 px-xl-3 col-12 col-xl-6 mb-3 mb-xl-4">
                                    <label for="exampleInputEmail1 " className={`${isRtl?'float-right':''} font-14`}>{text.FirstName}</label>
                                    <input type="text" onChange={e => setName(e.target.value)} className={`${error ? "form-control insert-comment-input border-error" : "form-control insert-comment-input"} `} aria-describedby="emailHelp" placeholder={text.FirstName} />
                                </div>
                            </div>
                            <div className="form-group px-0 px-xl-3 col-12 ">
                                <label className={`${isRtl?'float-right':''} font-14`}>{text.Comment}</label>
                                <textarea type="text" onChange={e => setReviewText(e.target.value)} className={`${errorquestion ? "form-control insert-comment-input border-error input-comment" : "input-comment form-control insert-comment-input"} `} aria-describedby="emailHelp" rows="4" cols="10" placeholder={text.EnterYourComment} ></textarea>
                                <span className={` text-danger Error-message font-14 ${errorquestion ? "opacity-1" : "opacity-0"}`}> {text.Thisfieldisrequired}</span>
                            </div>

                            <div className="form-group col-12 px-0 px-xl-3">
                                <div className="col-12 px-0">
                                    <ReCAPTCHA
                                        className={`${isRtl?'float-right':'float-left'} font-14 mb-3 mb-xl-0`}
                                        ref={Captcharef}
                                        showsuccess={showSuccess}
                                        onChange={() => setRecaptcha(true)}
                                        sitekey={captchaSiteKey}
                                    />
                                    <button type="submit" onClick={SubmitForm} className={`${isRtl?'float-right mr-xl-2':'ml-xl-2'} mb-xl-4 mb-xl-0 border-r-4 btn-red border-0 bk-red px-5 py-2 font-14 c-white`} aria-describedby="emailHelp"  >
                                        <span className='py-1 px-2 d-inline-block'>{text.Submit}</span>
                                    </button>
                                    <span className={`pt-2 m-0 text-danger Error-message col-12 px-0 font-14 ${showRecaptcha ? 'opacity-1' : 'opacity-0'}`}>{text.ErrorverifyingreCAPTCHA}</span>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </Tween>
        </Reveal >
    );
}

export default InsertComment;