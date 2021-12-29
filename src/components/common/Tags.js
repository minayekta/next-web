import Link from "next/link"

const Tags=(props)=>{
return(
    <Link href={props.link}>
        <a className={'tag-label px-4 mb-3 py-2 font-13 d-inline-block ' + props.className}>
            <span className='c-black all-transition'>{props.text}</span>
        </a>
    </Link>
)}
export default Tags