import { useEffect, useMemo, useState } from "react";
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
  const [users, setUsers] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/5f7b134e-2e75-4c33-9ff8-fb77af136719"
        );
        const data = response.data;
        // console.log("users to be set r", data);
        setLoading(false);
        setUsers(data);
        localStorage.setItem("users", JSON.stringify(data));
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
      <Table rows={memoizedUsers} rowLength={users.length} loading={loading} />
    </>
  );
};

export default Users;
