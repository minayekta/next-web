import { useRouter } from 'next/router';
import { Fragment, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import ReCAPTCHA from "react-google-recaptcha";
import { assetPrefix, captchaSiteKey, currentlanguageCode } from '../../../next.config';
import { GetReviewWithProductId } from '../Services/CommentService';
import { ProductInsertReview } from '../Services/productService';
var {text}=require('../translate-files/'+currentlanguageCode+'.json');

const CommentItemMobile = ({ res, showReplyId, setShowReplyId, productId, setAllReviews, parentId }) => {
    const [cookies, setCookie] = useCookies(['ronix']);
    const [recaptcha, setRecaptcha] = useState(null);
    const captchaRef2 = useRef(null);
    const [reviewMsg, setReviewMsg] = useState('');
    const [msgType, setMsgType] = useState(false);
    const [name, setName] = useState(false);
    const [reviewText, setReviewText] = useState(false);
    function onChangeCaptcha(value) {
        setRecaptcha(value);
    }
    let router = useRouter();
    const GetReviewData = {
        page: router.query.page == undefined ? 1  : parseInt(router.query.page),
        pageSize: 12,
        productId: productId,
        cookieValue: cookies.ronix
    }
    const getAllReviews = async function CallApiGetReviews(e) {
        const ResGet = await GetReviewWithProductId(GetReviewData);


        if (ResGet.data.response) {
            setAllReviews(ResGet.data.response.data)
        }
        else {
        }
    }
    const handleSubmitReview = (e) => {
        e.preventDefault()


        if (name != '' && reviewText != '') {
            if (recaptcha) {
                const InsertReviewData = {
                    productId: productId,
                    parentId: parentId,
                    author: name,
                    reviewText: reviewText,
                    cookieValue: cookies.ronix
                }
                async function CallApiInsertReviews(e) {
                    const Res = await ProductInsertReview(InsertReviewData);
                    if (Res.data.response) {
                        setMsgType(true)
                        setReviewMsg(text.Success);
                        setTimeout(function () {
                            setReviewMsg('')
                        }, 1500)
                        setRecaptcha(null);
                        setName('');
                        setReviewText('');
                        captchaRef2.current.reset();
                        document.getElementById("myForm").reset();
                        // router.push(`/product/${router.query.productid[0]}?page=${parseInt(router.query.page)}`)
                        getAllReviews()
                        setShowReplyId(0)
                    }
                    else {
                        setMsgType(false)
                        setReviewMsg(text.Nocommentswereposted);
                    }
                }
                CallApiInsertReviews();
            }
            else {
                setMsgType(false)
                setReviewMsg(text.ErrorverifyingreCAPTCHA)
            }
        }

        else {
            setMsgType(false)
            setReviewMsg(text.NameandTextcannotbeempty)
        }

    }




    return (
        <Fragment>


            <div className="col-md-12 comment-item my-3  " id='insert-comment-to-reply'>

                <img className="pl-5" src={`${assetPrefix}/assets/img/Reply.svg`} alt="" style={{ transform: 'scale(-1)' }} />
                <div className="float-right cursor-pointer" >
                    <svg  onClick={() => setShowReplyId(0)} aria-hidden="true" width="15" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-times fa-w-10 fa-2x"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" className=""></path></svg>

                </div>

                <form onSubmit={e => handleSubmitReview(e)} id='myForm'>
                    <div className="col-12 px-0">

                        <div className="form-group col-md-9 px-0 text-right d-flex">
                            {/* <label className="comment-label col-3 mt-2" > </label> */}
                            <input type="text" className="form-control col-8 mt-1" placeholder={text.FullName} onChange={(e) => setName(e.target.value)} />
                        </div>

                    </div>

                    <div className="col-md-12 px-0 d-flex">
                        <div className="form-group col-12 px-0 text-right">
                            {/* <label className="comment-label"> متن نظر</label> */}
                            <textarea rows='4' type="text" className="form-control" placeholder={text.Comment} onChange={(e) => setReviewText(e.target.value)}></textarea>
                        </div>

                    </div>
                    <div className="col-12 px-0 d-sm-block d-md-flex">
                        <div className="form-group col-6 px-0 text-right ">

                            <div className='reCaptchaHolder'>
                                <ReCAPTCHA
                                    ref={captchaRef2}
                                    sitekey={captchaSiteKey}
                                    onChange={onChangeCaptcha}
                                />
                            </div>
                        </div>
                        {/* <div className={`alert pull-right mr-4  `}></div> */}
                        <div className={`alert d-flex align-items-center ml-3 ${reviewMsg ? "visible" : "invisible"} ${msgType ? ' alert-success text-seuccess' : 'alert-danger text-danger'}`}  >{reviewMsg}</div>

                    </div>


                    <div className="form-group col-md-12 px-0 text-left mr-md-2">
                        {/* <button type="submit" className="btn submit-comment mr-md-2 " > Post</button> */}
                        <button type="submit" className="border-r-4 bk-red btn-red mb-4 mb-xl-0  mr-2 border-0 ml-md-3 font-14 px-5 py-2 c-white" aria-describedby="emailHelp"  >
                            <span>{text.PostComment}</span>
                        </button>
                    </div>

                </form>
            </div>

        </Fragment>
    );
}

export default CommentItemMobile;