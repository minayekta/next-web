import { Fragment, useState } from 'react';
import { isRtl } from '../../../next.config';
import SearchTag from './SearchTag';
import TagComponent from './TagComponent';

const TagsAccordion = ({ Data }) => {
    const [tags, setTags] = useState(Data);

    const handleSearch = (searchTerm) => {
        setTags(Data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())))
    }

    return (
        <aside className={`col-md-12 px-0 my-3 accordion-show d-none d-xl-block bk-white ${isRtl ? 'rtl' : ''}`} id="tagAside">
            <div className="box-full-height">
                <div className="stick-col">
                    <div className={`categoryaccordion-header p-3 ${isRtl ? 'rtl' : ''} `}>
                        <span>Tags</span>
                    </div>
                    <div className='tagsContainer col-12 bk-white mt-3 mb-3 px-1 '>
                        <div className='col-12 mt-2'>
                            <SearchTag handleSearch={handleSearch} />
                        </div>
                        <div className='tagLabelsAcordion custome-scroll-bar col-12 mt-3 py-2 px-0 mb-4 d-flex flex-wrap'>
                            {Children.toArray(
                                tags?.map(item =>
                                    <Fragment>
                                        <TagComponent title={item.title} aClass={'px-2 TagsLineInAccordion'} href={`/tags/${item.permalink}`} />
                                    </Fragment>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
export default TagsAccordion;