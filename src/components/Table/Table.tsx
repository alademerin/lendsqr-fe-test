import "./Table.scss";
import FilterIcon from "../../assets/filter-results-button.svg";
import ActionsIcon from "../../assets/ic-more-vert-18px.svg";

interface tableColumns {
  name: string;
}

const columns: tableColumns[] = [
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

const Table = () => {
  return (
    <div className="table__container">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th>
                {column.name}
                <img src={FilterIcon} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>LendSqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <Tag />
            </td>
            <td>
              <img src={ActionsIcon} />
            </td>
          </tr>
          <tr>
            <td>LendSqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <Tag />
            </td>
            <td>
              <img src={ActionsIcon} />
            </td>
          </tr>
          <tr>
            <td>LendSqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <Tag />
            </td>
            <td>
              <img src={ActionsIcon} />
            </td>
          </tr>
          <tr>
            <td>LendSqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <Tag />
            </td>
            <td>
              <img src={ActionsIcon} />
            </td>
          </tr>
          <tr>
            <td>LendSqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <Tag />
            </td>
            <td>
              <img src={ActionsIcon} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
