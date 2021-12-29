import { Fragment, useEffect, useState } from 'react';
import { isRtl } from '../../../next.config';
import PaginationCommentitem from './PaginationCommentItem';

const PaginationComment = ({ res, router }) => {
    const [pageCount, setPageCount] = useState([]);
    const pageCountArray = [];
    const [activityPageItem, setActivityPageItem] = useState(1);
    const [lastItems, setLastItems] = useState();
    const [betweenItems, setBetweenItems] = useState(0);

    let pageSize = res.pageSize;
    let pagequery = router.query.productid[0];
    const handlePaginationClick = (pageNumber) => {
        if (pageNumber !== activityPageItem) {
            setActivityPageItem(pageNumber);
            setBetweenItems(pageNumber - 2);
            router.push(`/NewProduct/${router.query.productid}?page=${pageNumber}`)
        } else return false;
    }
    const handlePreviousPage = () => {
        if (activityPageItem > 1) {
            handlePaginationClick(activityPageItem - 1)
        }
    }
    const handleNextPage = () => {
        if (activityPageItem < res.pageCount) {
            handlePaginationClick(activityPageItem + 1)
        }
    }
    useEffect(() => {
        setLastItems((res.pageCount) - 2);
        for (let i = 1; i <= res.pageCount; i++) {
            pageCountArray.push({ pageNumber: i });
        }
        setActivityPageItem(parseInt(router.query.page == undefined ? '1' : router.query.page))
        setPageCount(pageCountArray);
        setBetweenItems(parseInt(router.query.page) - 2);
    }, [])

    return (
        <div className={'pagination-wrapper d-flex align-items-center'}>
            {pageCount.length > 1 ? <i onClick={handlePreviousPage}
                className={activityPageItem === 1 ? `disabled far fa-angle-${isRtl ? 'right' : 'left'} font-22 cursor-pointer` : `far fa-angle-${isRtl ? 'right' : 'left'} font-22 cursor-pointer`}> </i> : null}
            {pageCount.map((pageIndex, index) => {
                return <Fragment key={index}>
                    {pageIndex.pageNumber < 3 ? <PaginationCommentitem
                        handleClick={() => handlePaginationClick(pageIndex.pageNumber)}
                        className={
                            activityPageItem === pageIndex.pageNumber ? 'active-page' : ''
                        }
                        content={pageIndex.pageNumber}

                    /> : pageIndex.pageNumber <= (activityPageItem + 1) && pageIndex.pageNumber > betweenItems ? <PaginationCommentitem
                        handleClick={() => handlePaginationClick(pageIndex.pageNumber)}
                        className={
                            activityPageItem === pageIndex.pageNumber ? 'active-page' : ''
                        }
                        content={pageIndex.pageNumber}

                    /> : pageIndex.pageNumber === lastItems ? <PaginationCommentitem
                        content={'...'}

                    /> : pageIndex.pageNumber === betweenItems ? <PaginationCommentitem
                        content={'...'}

                    /> : pageIndex.pageNumber > lastItems ? <PaginationCommentitem
                        handleClick={() => handlePaginationClick(pageIndex.pageNumber)}
                        className={
                            activityPageItem === pageIndex.pageNumber ? 'active-page last' : 'last'
                        }
                        content={pageIndex.pageNumber}

                    /> : null
                    }
                </Fragment>
            })}
            {pageCount.length > 1 ? <i onClick={handleNextPage}
                className={activityPageItem === res.pageCount ? 'disabled far fa-angle-right font-22 cursor-pointer' : 'far fa-angle-right font-22 cursor-pointer'}>  </i> : null}
        </div>

    );
}
export default PaginationComment;
