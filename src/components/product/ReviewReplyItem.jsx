import { Fragment, useState } from 'react';
import { useCookies } from 'react-cookie';
import { assetPrefix, currentlanguageCode } from '../../../next.config';
import { InsertReviewLike, UpdateReviewLike } from '../Services/CommentService';
import ReplyToComment from './ReplyToComment';
var { text } = require('../../components/translate-files/' + currentlanguageCode + '.json')
const reviewReplyItem = ({ data, showReplyId, setShowReplyId, productId, parentId, setAllReviews, res }) => {
    const [cookies, setCookie] = useCookies(['ronix']);
    const [reviewId, setReviewId] = useState(data.id);
    const [likeupdate, setLikeupdate] = useState(data.likeResult.likeCount);
    const [dislikeupdate, setDisLikeupdate] = useState(data.likeResult.disLikeCount);

    const handlelike = (id) => {
        if ($('#' + id).attr('src') === '/assets/img/like2.svg') {
            $('#' + id).attr('src', '/assets/img/like1.svg')
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
            if ($('#Img_dislike' + ID).attr('src') == "/assets/img/Deslike2.svg") {
                $('#Img_dislike' + ID).attr('src', "/assets/img/Deslike1.svg");
                $('#' + id).attr('src', "/assets/img/like2.svg")

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

                $('#' + id).attr('src', "/assets/img/like2.svg")
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
        if ($('#' + id).attr('src') === '/assets/img/Deslike2.svg') {
            $('#' + id).attr('src', '/assets/img/Deslike1.svg')
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
            if ($('#Img_like' + ID).attr('src') == '/assets/img/like2.svg') {
                $('#Img_like' + ID).attr('src', '/assets/img/like1.svg')
                $('#' + id).attr('src', '/assets/img/Deslike2.svg');

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
                $('#' + id).attr('src', '/assets/img/Deslike2.svg');
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
            <div className="col-12 pl-3 pl-xl-5 pr-0 mb-3 ">

                <div className='col-12 comment-item-reply'>
                    
                <div className="d-flex align-items-center">
                    <span className="comment-item-author pr-4">{data.author}</span>

                    <span className="comment-item-design">{data.publishDate}</span>
                </div>
                <div className="col-12 px-0">
                    <p className="mt-2 c-grayE replyTo-text">
                        <img className="pl-sm-2 pl-md-2" src={`${assetPrefix}/assets/img/Reply.svg`} alt="" />
                        {text.replyTo} {data.repliedTo}
                    </p>
                </div>
                <div className="col-12 px-0 ">
                    <p className="mt-2 c-grayE">
                        {data.reviewText}
                    </p>
                </div>
                <div className="col-12 mr-1  d-flex align-items-center" >
                    <img className=" cursor-pointer pr-2" src={`${data.likedByUser == null ? "/assets/img/Deslike1.svg" : data.likedByUser == false ? "/assets/img/Deslike2.svg" : '/assets/img/Deslike1.svg'}`} id={`Img_dislike${data.id}`} alt="" onClick={(e) => handleDislike(e.target.id)} />
                    <span className="font-14 comment-item-design px-2">{dislikeupdate}</span>
                    <span className="font-14 comment-item-design px-2">|</span>
                    <span className="font-14 comment-item-design px-2">{likeupdate}</span>
                    <img className=" cursor-pointer pl-2" src={`${data.likedByUser == null ? "/assets/img/like1.svg" : data.likedByUser == true ? "/assets/img/like2.svg" : '/assets/img/like1.svg'}`} id={`Img_like${data.id}`} alt="" onClick={(e) => handlelike(e.target.id)} />
                    <div onClick={() => handleReplyToComment(data.id)} className="cursor-pointer d-flex align-items-center px-2">
                        <img className="pl-sm-2 pl-md-5" src={`${assetPrefix}/assets/img/Reply.svg`} alt="" />
                        <span className="font-14 comment-item-design ">
                            {text.reply}
                        </span>
                    </div>
                </div>
           
                </div>

            </div>
            {
                showReplyId == data.id ?

                    < ReplyToComment res={res} data={data} productId={productId} setShowReplyId={setShowReplyId} setAllReviews={setAllReviews} parentId={parentId} /> : null
            }
        </Fragment>
    );
}

export default reviewReplyItem;