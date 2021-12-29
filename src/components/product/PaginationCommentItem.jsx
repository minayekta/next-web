const PaginationCommentItem = (props) => {
    return (
            <span id={props.id} onClick={props.handleClick} className={props.className + ' pagination-item px-2 cursor-pointer'}>
                <span className="pagination-content">{props.content}</span>
            </span>
    );
}
export default PaginationCommentItem;