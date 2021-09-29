import { Pagination } from "react-bootstrap";
function CustomPagination({ postsPerPage, totalPosts, paginate, active }) {
    let items = [];
    for (let number = 1; number <= Math.ceil(totalPosts / postsPerPage); number++) {
        items.push(
                <Pagination.Item
                    key={'_' + number}
                    active={number === active}
                    href="#top"
                    onClick={() => paginate(number)}>
                    {number}
                </Pagination.Item>
        );
    }

    return (
            <Pagination className="">{items}</Pagination>
    );
}
export default CustomPagination;