import Link from 'next/link';
import { Fragment } from 'react';
import { closeTagsPopup } from '../product-tags/TagsPopUp';

const TagComponent = (props) => {
    return (
        <Fragment>
            <div className={`tagsComponent mx-2 my-3 text-jutify ${props.divClass}`}>
                <Link href={props.href}>
                    <a className={`tagLinkContainer py-2 px-3 ${props.aClass}`} onClick={() => closeTagsPopup()}>
                        {props.title}
                    </a>
                </Link>
            </div>
        </Fragment>
    );
}

export default TagComponent;
