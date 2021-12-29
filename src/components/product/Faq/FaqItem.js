import $ from 'jquery';
import { Reveal, Tween } from 'react-gsap';
const FaqItem = (props) => {
    const handleShwoAnswer=(id)=>{
        $('#'+id+' ~ .answer').slideToggle(300)
        // $('.question').removeClass('active');
        $('#'+id).toggleClass('active');
        $('#'+id + ' .circle-plus ').toggleClass('opened')
    }
    return (
        <Reveal threshold={.001}>
            <Tween from={{ opacity: 0, transform: 'translateY(100px)' }} to={{ opacity: 1, transform: 'translateY(0px)' }} duration={0.7} ease="easein(.02, 0.1)">
                
        <div className='col-12 px-0 border-bottom py-4 bk-white'>
            <div id={'question-'+props.id} onClick={()=>{handleShwoAnswer('question-'+props.id)}}  className={`col-12 cursor-pointer question ` +props.className}>
                <p className='font-13 m-0 py-1'>{props.question}</p>
                
                <div class="circle-plus right closed">
                    <div class="circle">
                        <div class="horizontal"></div>
                        <div class="vertical"></div>
                    </div>
                </div>
            </div>
            <div className={'col-12 px-5 bk-grayC border-r-10 font-13 answer'}>
                <p className='m-0 my-3'>{props.answer}</p>
            </div>
        </div>
        </Tween>
        </Reveal>
    );
}
export default FaqItem;