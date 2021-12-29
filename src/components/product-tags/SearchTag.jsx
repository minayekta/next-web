import React from 'react';
import { currentlanguageCode, isRtl } from '../../../next.config';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');

const TagComponent = (props) => {
    return (
        <div className="searchTagContainer bk-white">
            <div className="searchDiv d-flex py-2 px-2">
                <input className='searchInput font-13' onChange={(e) => props.handleSearch(e.target.value)} placeholder={text.SearchForTag} />
                <i className='fa fa-search tagsSearchIcon font-18'></i>
            </div>
        </div>
    );
}

export default TagComponent;
