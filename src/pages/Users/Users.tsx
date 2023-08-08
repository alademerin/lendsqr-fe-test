import { useEffect, useMemo, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./users.scss";
import UsersIcon from "../../assets/users.svg";
import ActiveUsers from "../../assets/activeUsers.svg";
import UsersWithLoans from "../../assets/usersWithLoans.svg";
import UsersWithSavings from "../../assets/usersWithSavings.svg";
import Table from "../../components/Table/Table";
// import { User } from "../../models";
import axios from "axios";

interface Card {
  icon: any;
  title: string;
  count: string;
}

const cards: Card[] = [
  {
    icon: UsersIcon,
    title: "Users",
    count: "2,453",
  },
  {
    icon: ActiveUsers,
    title: "active users",
    count: "2,453",
  },
  {
    icon: UsersWithLoans,
    title: "users with loans",
    count: "12,243",
  },
  {
    icon: UsersWithSavings,
    title: "users with savings",
    count: "102,253",
  },
];

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isUsersLoaded, setIsUsersLoaded] = useState(false);

  useEffect(() => {
    const getUsers = async (): void => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/7bdf9e95-a03f-4320-b1db-29749a205d4d"
        );
        const data = response.data;
        // console.log("users to be set r", data);
        setIsUsersLoaded(true);
        setUsers(data);
localStorage.setItem("users", data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getUsers();
  }, []);

  const memoizedUsers = useMemo(() => users, [users]);
  return (
    <>
      <h2>Users</h2>
      <div className="cards">
        {cards.map((card, i) => (
          <div className="card" key={i}>
            <img src={card.icon} />
            <p className="title">{card.title}</p>
            <p className="count">{card.count}</p>
          </div>
        ))}
      </div>
      <Table rows={memoizedUsers} />
    </>
  );
};

export default Users;
