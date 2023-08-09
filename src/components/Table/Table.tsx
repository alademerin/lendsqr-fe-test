import { useEffect, useState } from "react";
import "./Table.scss";
import FilterIcon from "../../assets/filter-results-button.svg";
import ActionsIcon from "../../assets/ic-more-vert-18px.svg";

import { timeParse, timeFormat } from "d3-time-format";

import ViewIcon from "../../assets/np_view_1214519_000000 1.svg";
import BlacklistIcon from "../../assets/np_delete-friend_3248001_000000 1.png";
import ActivateIcon from "../../assets/np_user_2995993_000000 1.png";

import { User } from "../../models";
import { Link, NavLink } from "react-router-dom";
import { BarLoader } from "react-spinners";
import ReactPaginate from "react-paginate";

interface tableHeaders {
  name: string;
}

interface TableProps {
  rows: any[];
  status: string;
  loading: boolean;
  rowLength: number;
}

const headers: tableHeaders[] = [
  { name: "organization" },
  { name: "username" },
  { name: "email" },
  { name: "phone number" },
  { name: "date joined" },
  { name: "status" },
];


const Table = ({ rows, loading, rowLength }: TableProps) => {
  const parseDate = timeParse("%Y-%m-%dT%H:%M:%S %Z");
  const [activeRow, setActiveRow] = useState<string | null>(null);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleActionClicked = (rowId: string) => {
    setActiveRow((prevActiveRow) => (prevActiveRow === rowId ? null : rowId));
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % rows.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(rows.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(rows.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, rows]);

  {
    console.log(currentItems);
  }

  return (
    <>
      <div className="table__container">
        {loading ? (
          <div className="loader">
            <p>Loading Users</p>
            <BarLoader color="#39cdcc" />
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                {headers.map((header, i) => (
                  <th key={i}>
                    {header.name}
                    <img src={FilterIcon} className="header__filter" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems?.map((row, i) => (
                <tr key={row._id}>
                  <td>{row.company}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.phoneNumber}</td>
                  <td>{timeFormat("%b %d %Y %I:%M%p")(parseDate(row.dateJoined))}</td>
                  <td>
                    <div className="tag">
                      <p
                        className={`tag__text ${
                          row.status === "active"
                            ? "activeStatus"
                            : row.status === "pending"
                            ? "pending"
                            : row.status === "blacklisted"
                            ? "blacklisted"
                            : row.status === "inactive"
                            ? "inactive"
                            : ""
                        }`}
                      >
                        {row.status}
                      </p>
                    </div>
                  </td>
                  {/* <div className="actions__container"> */}
                  <td onClick={() => handleActionClicked(row._id)}>
                    <div className="action__btn">
                      <img src={ActionsIcon} />
                    </div>
                    {activeRow === row._id && (
                      <tr>
                        <td>
                          <div className="dropdown">
                            <Link className="link" to={`user/${row._id}`}>
                              <div class="dropdown__item">
                                <img src={ViewIcon} />
                                <p> View Details</p>
                              </div>
                            </Link>
                            <div class="dropdown__item">
                              <img src={BlacklistIcon} />
                              <p> Blacklist User</p>
                            </div>
                            <div class="dropdown__item">
                              <img src={ActivateIcon} />
                              <p> Activate User</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </td>
                  {/* </div> */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="pagContainer">
        <div className="row__count">
          <p>Showing </p>
          <select className="itemsPerPage" onChange={(e) => setItemsPerPage(e.target.value)}>
            <option value={10}>{10}</option>
            <option value={rowLength / 25}>{rowLength / 25}</option>
            <option value={rowLength / 10}>{rowLength / 10}</option>
            <option value={rowLength / 5}>{rowLength / 5}</option>
            <option value={rowLength}>{rowLength}</option>
          </select>
          <p>out of {rowLength} </p>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page__num"
          previousLinkClassName="page__btn"
          nextLinkClassName="page__btn"
          activeLinkClassName="active"
        />
      </div>
    </>
  );
};

export default Table;
