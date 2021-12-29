import { Fragment, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { assetPrefix, currentlanguageCode } from '../../../next.config';
import { InsertReviewLike, UpdateReviewLike } from '../Services/CommentService';
import ReplyToComment from './ReplyToComment';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
const CommentItem = ({ data, showReplyId, setShowReplyId, productId, setAllReviews, parentId, commentRate }) => {
    const [cookies, setCookie] = useCookies(['ronix']);
    const [likeupdate, setLikeupdate] = useState(data.likeResult.likeCount);
    const [dislikeupdate, setDisLikeupdate] = useState(data.likeResult.disLikeCount);
    const [reviewId, setReviewId] = useState(data.id);

    useEffect(() => {
        // let start_animation = 'bottom bottom';
        // let tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".comment-box",
        //         start: '-=500',
        //     }
        // });
        // tl.addLabel("start")
        //     .from(".comment-box>div", { opacity: 0, y: 100 })
        //     .to(".comment-box>div", { opacity: 1, y: 0 })
        //     .addLabel("end");
    }, [])
    const handlelike = (id) => {
        if ($('#' + id).attr('src') === assetPrefix + '/assets/img/like2.svg') {
            $('#' + id).attr('src', assetPrefix + '/assets/img/like1.svg')
            let ID = id.slice(8);
            const body = {
                "reviewId": parseInt(ID),
                "cookieValue": cookies.ronix,
                "disliked": false,
                "disabledByUser": true
            }
            async function updateLike() {
                const Insert = await UpdateReviewLike(body)
                setLikeupdate(Insert.data.response.likeCount)
                setDisLikeupdate(Insert.data.response.disLikeCount)
            }
            updateLike()
        } else {
            let ID = id.slice(8);
            if ($('#Img_dislike' + ID).attr('src') == assetPrefix + "/assets/img/Deslike2.svg") {
                $('#Img_dislike' + ID).attr('src', assetPrefix + "/assets/img/Deslike1.svg");
                $('#' + id).attr('src', assetPrefix + "/assets/img/like2.svg")

                const body = {
                    "reviewId": parseInt(ID),
                    "disliked": false,
                    "cookieValue": cookies.ronix
                }
                async function InsertLike() {
                    const Insert = await InsertReviewLike(body);
                    setLikeupdate(Insert.data.response.likeCount)
                    setDisLikeupdate(Insert.data.response.disLikeCount)
                }
                InsertLike()
            } else {

                $('#' + id).attr('src', assetPrefix + "/assets/img/like2.svg")
                const body = {
                    "reviewId": parseInt(ID),
                    "disliked": false,
                    "cookieValue": cookies.ronix
                }
                async function InsertLike() {
                    const Insert = await InsertReviewLike(body);
                    setLikeupdate(Insert.data.response.likeCount)
                    setDisLikeupdate(Insert.data.response.disLikeCount)
                }
                InsertLike()
            }
        }

    }
    const handleDislike = (id) => {
        if ($('#' + id).attr('src') === assetPrefix + '/assets/img/Deslike2.svg') {
            $('#' + id).attr('src', assetPrefix + '/assets/img/Deslike1.svg')
            let ID = id.slice(11);
            const body = {
                "reviewId": parseInt(ID),
                "cookieValue": cookies.ronix,
                "disliked": true,
                "disabledByUser": true
            }
            async function updateLike() {
                const Insert = await UpdateReviewLike(body)
                setLikeupdate(Insert.data.response.likeCount)
                setDisLikeupdate(Insert.data.response.disLikeCount)
            }
            updateLike()
        } else {
            let ID = id.slice(11);
            if ($('#Img_like' + ID).attr('src') == assetPrefix + '/assets/img/like2.svg') {
                $('#Img_like' + ID).attr('src', assetPrefix + '/assets/img/like1.svg')
                $('#' + id).attr('src', assetPrefix + '/assets/img/Deslike2.svg');

                const body = {
                    "reviewId": parseInt(ID),
                    "disliked": true,
                    "cookieValue": cookies.ronix
                }
                async function InsertLike() {
                    const Insert = await InsertReviewLike(body);
                    setLikeupdate(Insert.data.response.likeCount)
                    setDisLikeupdate(Insert.data.response.disLikeCount)
                }
                InsertLike()
            } else {
                let ID = id.slice(11);
                $('#' + id).attr('src', assetPrefix + '/assets/img/Deslike2.svg');
                const body = {
                    "reviewId": parseInt(ID),
                    "disliked": true,
                    "cookieValue": cookies.ronix
                }
                async function InsertLike() {
                    const Insert = await InsertReviewLike(body);
                    setLikeupdate(Insert.data.response.likeCount)
                    setDisLikeupdate(Insert.data.response.disLikeCount)
                }
                InsertLike()


            }
        }

    }
    const handleReplyToComment = (id) => {
        setShowReplyId(id);
    }

    return (

        <Fragment>
            <div className="col-md-12 comment-item my-3 ">
                <div className='col-12 px-0 d-flex align-items-center'>
                    <div className="col-6 px-0 d-flex align-items-center">
                        <span className="comment-item-author pr-2 font-13">
                            {data.author}
                        </span>
                        <span className='comment-rate d-inline'>
                            <img src={`${assetPrefix}/assets/img/icon/star.svg`} />
                            <span className={'font-13 pl-2'}>{commentRate}</span>
                        </span>
                        <div>
                        </div>
                    </div>
                    <div className='col-6 text-right px-0 px-0 d-flex align-items-center justify-content-end'>
                        <img src={`${assetPrefix}/assets/img/icon/date.svg`} />
                        <span className="comment-item-design pl-2">{data.publishDate}</span>
                    </div>
                </div>
                <div className='col-12 px-0'>
                    <p className="my-3 px-0 font-13">
                        {data.reviewText}
                    </p>
                </div>
                <div className="d-flex align-items-center pb-2 pt-2 col-12 px-0">
                    <img className="cursor-pointer pr-2" src={`${data.likedByUser == null ? `${assetPrefix}/assets/img/Deslike1.svg` : data.likedByUser == false ? `${assetPrefix}/assets/img/Deslike2.svg` : `${assetPrefix}/assets/img/Deslike1.svg`}`} id={`Img_dislike${data.id}`} alt="" onClick={(e) => handleDislike(e.target.id)} />
                    <span className="font-13 c-black comment-item-design py-2 px-2">{dislikeupdate}</span>
                    <span className="font-13 c-black comment-item-design py-2 border-left-black px-2">{likeupdate}</span>
                    <img className="cursor-pointer pl-2" src={`${data.likedByUser == null ? `${assetPrefix}/assets/img/like1.svg` : data.likedByUser == true ? `${assetPrefix}/assets/img/like2.svg` : `${assetPrefix}/assets/img/like1.svg`}`} id={`Img_like${data.id}`} alt="" onClick={(e) => handlelike(e.target.id)} />
                    <div onClick={() => handleReplyToComment(data.id)} className="cursor-pointer d-flex align-items-center px-2">
                        <span className="font-14 pl-sm-2 pl-md-5 comment-item-design font-13" >{text.reply}</span>
                        <img src={`${assetPrefix}/assets/img/Reply.svg`} alt="" />
                    </div>
                </div>
            </div>

            {
                showReplyId == data.id ?
                    <ReplyToComment data={data} productId={productId} setShowReplyId={setShowReplyId} setAllReviews={setAllReviews} parentId={parentId} /> : null
            }

        </Fragment>


    )
}
export default CommentItem;
