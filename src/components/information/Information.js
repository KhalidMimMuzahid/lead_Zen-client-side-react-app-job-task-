import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import TableInfo from "../TableInfo/TableInfo";

const Information = () => {
  const [informations, setInformations] = useState([]);

  // fatching the fake data from a public json file
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setInformations(data));
  }, []);

  // ------------ for pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCout] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(informations.slice(itemOffset, endOffset));
    setPageCout(Math.ceil(informations.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, informations]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % informations.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="bg-blue-50  p-5 rounded ">
      <div>
        {currentItems.map((info) => (
          <TableInfo key={info.id} info={info}></TableInfo>
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </div>
  );
};

export default Information;
