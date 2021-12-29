import React from 'react';

const TitlesFieldset = (props) => {
    return (
        <div className={'col-12 px-0 title-fieldset'}>
            <h3 className={props.titleClass}>
                <span className={`bk-white my-auto ${!props.rtl ? ' pl-2 pr-0' : ' pr-2 pl-0'}`}>
                    {props.titleContent}
                </span>
                {props.titleContent2 ?
                    <span className={`bk-white float-right`}>
                        {props.titleContent2}
                    </span>
                    : null
                }
            </h3>
        </div>
    )
}
export default TitlesFieldset