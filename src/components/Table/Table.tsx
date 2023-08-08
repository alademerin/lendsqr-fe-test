import { useState } from "react";
import "./Table.scss";
import FilterIcon from "../../assets/filter-results-button.svg";
import ActionsIcon from "../../assets/ic-more-vert-18px.svg";

import { timeParse, timeFormat } from "d3-time-format";

import ViewIcon from "../../assets/np_view_1214519_000000 1.svg";
import BlacklistIcon from "../../assets/np_delete-friend_3248001_000000 1.png";
import ActivateIcon from "../../assets/np_user_2995993_000000 1.png";

import { User } from "../../models";
import { Link, NavLink } from "react-router-dom";
interface tableHeaders {
  name: string;
}

interface TableProps {
  rows: any[];
  status: string;
}

const headers: tableHeaders[] = [
  { name: "organization" },
  { name: "username" },
  { name: "email" },
  { name: "phone number" },
  { name: "date joined" },
  { name: "status" },
];

const Tag = () => {
  return (
    <div className="tag">
      <p className="tag__text">Active</p>
    </div>
  );
};

const Table = ({ rows }: TableProps) => {
  const parseDate = timeParse("%Y-%m-%dT%H:%M:%S %Z");
  const [activeRow, setActiveRow] = useState<string | null>(null);
  const handleActionClicked = (rowId: string) => {
    setActiveRow((prevActiveRow) => (prevActiveRow === rowId ? null : rowId));
  };

  return (
    <div className="table__container">
      <table>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>
                {header.name}
                <img src={FilterIcon} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, i) => (
            <tr key={row._id}>
              <td>{row.company}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phoneNumber}</td>
              <td>{timeFormat("%b %d %Y %I:%M%p")(parseDate(row.dateJoined))}</td>
              <td>
                <div className="tag">
                  <p className="tag__text">{row.status}</p>
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
    </div>
  );
};

export default Table;
