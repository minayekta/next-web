import loadable from '@loadable/component';
import { Children, Fragment, useEffect, useState } from 'react';
import { currentlanguageCode, isRtl } from "../../next.config";
import Breadcrumb from '../../src/components/common/Breadcrumb';
import { logApi } from '../../src/components/Services/productService';
import { ProductGetAllTags } from '../../src/components/Services/TagsServices';
import { ReplaceString } from '../../src/components/Services/UtilityService';
const TagComponent = loadable(() => import('../../src/components/product-tags/TagComponent'));
const SearchTag = loadable(() => import('../../src/components/product-tags/SearchTag'));
var { text } = require('../../src/components/translate-files/' + currentlanguageCode + '.json');

const Tags = (props) => {

    const [tags, setTags] = useState();

    const handleSearch = (searchTerm) => {
        setTags(props.productTags.response.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())))
    }

    useEffect(() => {
        setTags(props.productTags.response)
    }, [])

    try {
        return (
            <Fragment>
                <div className='container tags-page px-3'>
                    <div className={` ${isRtl ? 'rtl' : ''}`}>
                        <Breadcrumb firstItem={{ title: `${text.Tags}`, link: `/tags` }} containerClass={'px-1'} />
                    </div>
                    <div className='tagsContainer col-12 bk-white offset- mb-5 pb-5 mt-3 mt-xl-0'>

                        <div className='col-12 d-flex justify-content-center mt-5'>
                            <div className='col-12 col-md-6 col-xl-4 px-0'>
                                <SearchTag handleSearch={handleSearch} />
                            </div>
                        </div>

                        <div className='col-12 d-flex justify-content-center px-0'>
                            <div className={`tagLabels custome-scroll-bar col-11 mt-5 py-2 mb-4 ${isRtl ? 'rtl' : ''}`}>
                                {Children.toArray(
                                    tags?.map(item =>
                                        <Fragment>
                                            <TagComponent title={item.title} href={`/tags/${item.permalink}`} />
                                        </Fragment>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        );
    }
    catch (error) {
        const registerLogApi = async () => {
            const logBody = {
                "cookieValue": ReplaceString(cookies.ronix, "-", ""),
                "environment": parseInt('4'),
                "page": 'tags',
                "permalink": '',
                "action": "Page loading",
                "message": `${error}`,
                "ipAddress": "0",
                "languageCode": currentlanguageCode
            }
            await logApi(logBody)
        }
        registerLogApi()
        return <Custom500 />;
    }
}

export default Tags;
export async function getServerSideProps(ctx) {
    const { ronix } = ctx.req.cookies;
    let body = {
        text: ''
    }
    let productTags = '';
    try {
        productTags = await ProductGetAllTags(body);
    }
    catch (error) {
        const logBody = {
            "cookieValue": ReplaceString(ronix, "-", ""),
            "environment": 4,
            "page": "tags",
            "permalink": '',
            "action": "/Product/GetAllTag",
            "message": `${error}`,
            "ipAddress": "0",
            "languageCode": currentlanguageCode
        }
        const registerLogApi = await logApi(logBody)
    }
    return {
        props: {
            productTags: productTags.data,
        }
    }
}