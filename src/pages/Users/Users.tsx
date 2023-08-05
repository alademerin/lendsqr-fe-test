import NavBar from "../../components/NavBar/NavBar";
import "./users.scss";
import UsersIcon from "../../assets/users.svg";
import ActiveUsers from "../../assets/activeUsers.svg";
import UsersWithLoans from "../../assets/usersWithLoans.svg";
import UsersWithSavings from "../../assets/usersWithSavings.svg";

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
  return (
    <NavBar>
      <h2>Users</h2>
      <div className="cards">
        {cards.map((card) => (
          <div className="card">
            <img src={card.icon} />
            <p className="title">{card.title}</p>
            <p className="count">{card.count}</p>
          </div>
        ))}
      </div>
    </NavBar>
  );
};

export default Users;
