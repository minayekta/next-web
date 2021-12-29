import Link from "next/link";

const BreadcrumbItem = (props) => {
    return (
        <>
            <Link href={props.url}>
                <a className='d-inline-block breadcrumbItem pl-1 text-white'>
                    <span className='c-grayC font-12 all-transirion'>
                        {props.text === 'Home' ? 'home' : props.text}
                        {props.lastItem === true ?
                            ''
                            :
                            <span className="pl-2">/</span>
                            // <svg className={'mr-3'} width='10px' xmlns="http://www.w3.org/2000/svg" width="3.233" height="5.235" viewBox="0 0 3.233 5.235">
                            //     <path id="Path_2566" data-name="Path 2566" d="M11.207,6l.615.615-2,2,2,2-.615.615L8.59,8.617Z" transform="translate(-8.59 -6)" fill="#9b9b9b" />
                            // </svg>
                        }
                    </span>
                </a>
            </Link>

        </>
    );

}
export default BreadcrumbItem