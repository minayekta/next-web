const PaginationItem = (props) => {
    return (
       
            <a  className="d-flex text-dark">
                <span onClick={props.handleClick} className={props.className + ' pagination-item px-2 cursor-pointer'}>
                    <span className="pagination-content"> {props.content}</span>
                </span>
            </a>
      
    );
}
export default PaginationItem;