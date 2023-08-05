import "./NavBar.scss";
import Logo from "../../assets/logo.svg";
import SearhIcon from "../../assets/searchbar.svg";
import Notification from "../../assets/notification.png";
import User from "../../assets/user.png";
import Dropdown from "../../assets/dropdown.svg";
import Briefcase from "../../assets/briefcase.svg";
import Dropdown2 from "../../assets/dropdown2.svg";
import Home from "../../assets/home.svg";
import UserFriends from "../../assets/user-friends 1.svg";

type MenuItem = {
  icon: any;
  name: string;
};

const widgets: MenuItem[] = [
  {
    icon: Briefcase,
    name: "Users",
  },
  {
    icon: Briefcase,
    name: "Guarantors",
  },
  {
    icon: Briefcase,
    name: "Loans",
  },
  {
    icon: Briefcase,
    name: "Decision Models",
  },
  {
    icon: Briefcase,
    name: "Savings",
  },
  {
    icon: Briefcase,
    name: "Loan Requests",
  },
  {
    icon: Briefcase,
    name: "Whitelist",
  },
  {
    icon: Briefcase,
    name: "Karma",
  },
  {
    icon: Briefcase,
    name: "Karma",
  },
  {
    icon: Briefcase,
    name: "Karma",
  },
  {
    icon: Briefcase,
    name: "Karma",
  },
  {
    icon: Briefcase,
    name: "Karma",
  },
];

const NavSearchBar = () => {
  return (
    <div className="searchbar">
      <input />
      <div className="searchButton">
        <img src={SearhIcon} />{" "}
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="container">
      <nav className="main__nav">
        <div className="left__container">
          <img src={Logo} />
          <NavSearchBar />
        </div>
        <div className="userProfile">
          <a href="#">Docs</a>
          <span className="notification">
            <img src={Notification} />
          </span>
          <img src={User} className="profileImage" />
          <p>Adedeji</p>
          <img src={Dropdown} />
        </div>
      </nav>
      <nav className="side__nav">
        <div className="widget">
          <img src={Briefcase} />
          <p className="side__nav-dropdown">Switch organization</p>
          <img src={Dropdown2} />
        </div>
        <div className="widget">
          <img src={Home} />
          <p>Dashboard</p>
          <img src={Dropdown2} />
        </div>

        <div className="side__nav-subgroup">
          <p className="header">customers</p>
          {widgets.map((widget) => (
            <div className="widget-container">
              <div className="widget">
                <img src={UserFriends} />
                <p>{widget.name}</p>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
