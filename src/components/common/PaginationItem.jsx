const PaginationItem = (props) => {
    return (
        <span className="d-flex text-dark">
            <span onClick={props.handleClick} className={props.className + ' pagination-item px-2 cursor-pointer'}>
                <span className="pagination-content"> {props.content}</span>
            </span>
        </span>
    );
}
export default PaginationItem;