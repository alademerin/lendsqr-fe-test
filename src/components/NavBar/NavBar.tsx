import { ReactNode } from "react";

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
import Handshake from "../../assets/handshake-regular.svg";
import Guarantors from "../../assets/users 1.svg";
import Sack from "../../assets/sack.svg";
import PiggyBank from "../../assets/piggy-bank 1.svg";
import Loan from "../../assets/loan.svg";
import UserCheck from "../../assets/user-check 1.svg";
import UserTimes from "../../assets/user-times 1.svg";
import Bank from "../../assets/np_bank_148501_000000 1.svg";
import Coins from "../../assets/coins-solid 1.svg";
import Mobile from "../../assets/mobile.svg";
import Galaxy from "../../assets/galaxy 1.svg";
import UserCog from "../../assets/user-cog 1.svg";
import Scroll from "../../assets/scroll 1.svg";
import ChartBar from "../../assets/chart-bar 2.svg";
import Sliders from "../../assets/sliders-h 1.svg";
import BadgePercent from "../../assets/badge-percent 1.svg";
import Clipboard from "../../assets/clipboard-list 1.svg";
import Tire from "../../assets/tire 1.svg";
import LogoutIcon from "../../assets/sign-out 1.svg";

type MenuItem = {
  title: string;
  item: [
    {
      icon: any;
      name: string;
    }
  ];
};

const widgets: MenuItem[] = [
  {
    title: "Customers",
    items: [
      {
        icon: UserFriends,
        name: "Users",
      },
      {
        icon: Guarantors,
        name: "Guarantors",
      },
      {
        icon: Sack,
        name: "Loans",
      },
      {
        icon: Handshake,
        name: "Decision Models",
      },
      {
        icon: PiggyBank,
        name: "Savings",
      },
      {
        icon: Loan,
        name: "Loan Requests",
      },
      {
        icon: UserCheck,
        name: "Whitelist",
      },
      {
        icon: UserTimes,
        name: "Karma",
      },
    ],
  },
  {
    title: "Businesses",
    items: [
      {
        icon: Briefcase,
        name: "Organization",
      },
      {
        icon: Loan,
        name: "Loan Products",
      },
      {
        icon: Bank,
        name: "Savings Products",
      },
      {
        icon: Coins,
        name: "Fees and Charges",
      },
      {
        icon: Mobile,
        name: "Transactions",
      },
      {
        icon: Galaxy,
        name: "Services",
      },
      {
        icon: UserCog,
        name: "Service Account",
      },
      {
        icon: Scroll,
        name: "Settlements",
      },
      {
        icon: ChartBar,
        name: "Reports",
      },
    ],
  },
  {
    title: "settings",
    items: [
      {
        icon: Sliders,
        name: "Preferences",
      },
      {
        icon: BadgePercent,
        name: "Fees and Pricing",
      },
      {
        icon: Clipboard,
        name: "Audit Logs",
      },
      {
        icon: Tire,
        name: "System Messages",
      },
    ],
  },
];

const NavSearchBar = () => {
  return (
    <div className="searchbar">
      <input placeholder="Search for anything" />
      <div className="searchButton">
        <img src={SearhIcon} />{" "}
      </div>
    </div>
  );
};

interface Props {
  children: ReactNode;
}

const NavBar = ({ children }: Props) => {
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
      <div className="page__containers">
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
            {widgets.map((widget) => (
              <>
                <p className="header">{widget.title}</p>
                {widget?.items.map((wi) => (
                  <div className="widget-container">
                    <div className="widget">
                      <img src={wi.icon} />
                      <p>{wi.name}</p>
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
          <div className="logout__container">
            <div className="signout__widget">
              <img src={LogoutIcon} />
              <p>Logout</p>
            </div>
            <p>v1.2.0</p>
          </div>
        </nav>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default NavBar;
