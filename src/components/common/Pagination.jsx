import { Fragment, useEffect, useState } from 'react';
import { isRtl } from '../../../next.config';
import PaginationItem from "./PaginationItem";

const Pagination = ({ res, router, setrouter }) => {
    const [pageCount, setPageCount] = useState([]);
    const pageCountArray = [];
    const [activityPageItem, setActivityPageItem] = useState(1);
    const [lastItems, setLastItems] = useState();
    const [betweenItems, setBetweenItems] = useState(0);
    let pageSize = res.pageSize;
    const handlePaginationClick = (pageNumber) => {
        console.log(pageNumber, router.query.searchTerm);
        if (pageNumber !== activityPageItem) {
            setActivityPageItem(pageNumber);
            setBetweenItems(pageNumber - 2);
            { router.query.searchTerm == undefined ? router.push(`/all-products?page=${pageNumber}`) : router.push(`/all-products?searchTerm=${router.query.searchTerm}&page=${pageNumber}`) }

        } else return false;
    }
    const handlePreviousPage = () => {
        if (activityPageItem > 1) {
            handlePaginationClick(activityPageItem - 1);
        }
    }
    const handleNextPage = () => {
        if (activityPageItem < res.pageCount) {
            handlePaginationClick(activityPageItem + 1);

        }
    }
    useEffect(() => {
        setLastItems((res.pageCount) - 2);
        for (let i = 1; i <= res.pageCount; i++) {
            pageCountArray.push({ pageNumber: i });
        }
        setPageCount(pageCountArray);
        setActivityPageItem(parseInt(router.query.page == undefined ? '1' : router.query.page))
        setBetweenItems(parseInt(router.query.page) - 2);
    }, [router])

    return (
        <div className={'pagination-wrapper d-flex align-items-center'}>
            {pageCount.length > 1 ? <i onClick={handlePreviousPage}
                className={activityPageItem === 1 ? `disabled far fa-angle-${isRtl ? 'right' : 'left'} font-22 cursor-pointer` : `far fa-angle-${isRtl ? 'right' : 'left'} font-22 cursor-pointer`}> </i> : null}
            {pageCount.map((pageIndex, index) => {
                return <Fragment key={index}>
                    {pageIndex.pageNumber < 3 ? <PaginationItem
                        handleClick={() => handlePaginationClick(pageIndex.pageNumber)}
                        className={
                            activityPageItem === pageIndex.pageNumber ? 'active-page' : ''
                        }
                        content={pageIndex.pageNumber}

                    /> : pageIndex.pageNumber <= (activityPageItem + 1) && pageIndex.pageNumber > betweenItems ? <PaginationItem
                        handleClick={() => handlePaginationClick(pageIndex.pageNumber)}
                        className={
                            activityPageItem === pageIndex.pageNumber ? 'active-page' : ''
                        }
                        content={pageIndex.pageNumber}

                    /> : pageIndex.pageNumber === lastItems ? <PaginationItem
                        content={'...'}

                    /> : pageIndex.pageNumber === betweenItems ? <PaginationItem
                        content={'...'}

                    /> : pageIndex.pageNumber > lastItems ? <PaginationItem
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
                className={activityPageItem === res.pageCount ? `disabled far fa-angle-${isRtl ? 'left' : 'right'} font-22 cursor-pointer` : `far fa-angle-${isRtl ? 'left' : 'right'} font-22 cursor-pointer`}></i> : null}
        </div>

    );
}
export default Pagination;
