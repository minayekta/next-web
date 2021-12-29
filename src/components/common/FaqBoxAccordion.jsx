import $ from 'jquery';
import { Fragment, useEffect } from 'react';

const FaqBoxAccordion = ({ filters, FAQContent, data }) => {


    // Filter change handler

    useEffect(() => {
        setTimeout(() => {

            $('.faq-question-content').slideUp(300);
            $('.faq-question-content').next().removeClass('up');
            $('.faq-question-content').next().removeClass('active');
            // $(`[aria-Label="${data.type}"]`).each(function () { $(this).children().eq(0).children().eq(1).removeClass('up') });
            // $(`[aria-Label="${data.type}"]`).removeClass('active');
        }, 100);
        $('.faq-item-question').click(
            function () {
                $('.faq-question-content').slideUp(300);
                $('.faq-question-content').next().removeClass('up');
                $('.faq-question-content').next().removeClass('active');
                setTimeout(() => {
                    $('.faq-plus-icon').removeClass('active');
                    $(this).find('.faq-question-content ').slideUp(300);
                    $(this).find('.faq-question-content ').removeClass('up');
                    $(this).find('.faq-question-content ').removeClass('active');
                }, 100);
                if ($(this).next().hasClass('active')) {
                    setTimeout(() => {
                        $(this).next().removeClass('active');
                        $(this).next().next().slideUp(300);
                        $(this).children().eq(0).children().eq(1).removeClass('up');

                    }, 100);

                }
                else {
                    setTimeout(() => {
                        // $(this).next().addClass('active');
                        $(this).next().addClass('active');
                        $(this).next().next().slideDown(300);
                        $(this).children().eq(0).children().eq(1).addClass('up');
                    }, 100);

                }
            }
        )
        $('.faq-plus-icon').click(
            function () {
                $('.faq-question-content').slideUp(300);
                $('.faq-question-content').next().removeClass('up');
                $('.faq-question-content').next().removeClass('active');
                setTimeout(() => {
                    $('.faq-plus-icon').removeClass('active');
                    $(this).find('.faq-question-content ').slideUp(300);
                    $(this).find('.faq-question-content ').removeClass('up');
                    $(this).find('.faq-question-content ').removeClass('active');

                }, 100);
                if ($(this).hasClass('active')) {
                    setTimeout(() => {
                        $(this).removeClass('active');
                        $(this).next().slideUp(300);
                        $(this).children().eq(0).children().eq(1).removeClass('up');

                    }, 100);

                }
                else {
                    setTimeout(() => {
                        // $(this).next().addClass('active');
                        $(this).addClass('active');
                        $(this).next().slideDown(300);
                        $(this).children().eq(0).children().eq(1).addClass('up');
                    }, 100);

                }

            });
    }, []);
    return (
        <Fragment>
            <div className="filter-container">
                {FAQContent.map(item =>
                    <div className={`position-relative filter-item  faq-box-question-item p-2 ${item.categoryTag.trim()}`} aria-label={data.type}>
                        <p className="my-3 faq-item-question cursor-pointer">{item.question}</p>
                        <button className="faq-plus-icon" >
                            <span className="plus"></span>
                            <span className="minus"></span>
                        </button>
                        <div className="faq-question-content " >
                            {/* <span className="faq-arrow-up"></span> */}
                            <p >{item.answer}</p>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default FaqBoxAccordion