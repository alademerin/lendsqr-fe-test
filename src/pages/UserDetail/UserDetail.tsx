import "./userDetail.scss";
import NavBar from "../../components/NavBar/NavBar";
import BackArrow from "../../assets/back.svg";
import User from "../../assets/user.png";
import Star from "../../assets/star.svg";
import StarOutline from "../../assets/staroutline.svg";
const UserDetail = () => {
  return (
    <NavBar>
      <div className="back__btn">
        <img src={BackArrow} />
        <p>Back to Users</p>
      </div>
      <div className="user__details-header">
        <div>
          <h2 className="title">User Details</h2>
        </div>
        <div className="action__btn-container">
          <button className="btn__blacklist">Blacklist User</button>
          <button className="btn__activate">Activate User</button>
        </div>
      </div>

      <div className="basicdetails">
        <div className="basicdetails__first-row">
          <div className="image__container">
            <img src={User} />
          </div>
          <div className="username__container">
            <h3>Grace Effiom</h3>
            <p className="userId">LSQFf587g90</p>
          </div>
          <div className="usertier__container">
            <p className="tierText">User's Tier</p>
            <span className="stars">
              <img src={Star} />
              <img src={Star} />
              <img src={Star} />
            </span>
          </div>
          <div className="account">
            <p className="account__balance">₦200,000.00</p>
            <p className="account__number">9912345678/Providus Bank</p>
          </div>
        </div>
        <div className="basicdetails__second-row">
          <p className="active">General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>

      <div className="personaldetails__container">
        <div className="personinfo__container">
          <p className="title">Personal Information</p>
          <div className="first__row">
            <div>
              <div>
                <p className="label">full name</p>
                <p className="detail">Grace Effiom</p>
              </div>
              <div className="second">
                <p className="label">phone number</p>
                <p className="detail">07060780922</p>
              </div>
            </div>
            <div>
              <div>
                <p className="label">full name</p>
                <p className="detail">Grace Effiom</p>
              </div>
              <div className="second">
                <p className="label">phone number</p>
                <p className="detail">07060780922</p>
              </div>
            </div>
            <div>
              <div>
                <p className="label">full name</p>
                <p className="detail">Grace Effiom</p>
              </div>
              <div className="second">
                <p className="label">phone number</p>
                <p className="detail">07060780922</p>
              </div>
            </div>
            <div>
              <div>
                <p className="label">full name</p>
                <p className="detail">Grace Effiom</p>
              </div>
            </div>
            <div>
              <div>
                <p className="label">full name</p>
                <p className="detail">Grace Effiom</p>
              </div>
            </div>
          </div>
        </div>
        <div className="personinfo__container">
          <p className="title">Education and Employment</p>
          <div className="first__row">
            <div>
              <div>
                <p className="label">Level of Education</p>
                <p className="detail">B.Sc</p>
              </div>
              <div className="second">
                <p className="label">phone number</p>
                <p className="detail">07060780922</p>
              </div>
            </div>
            <div>
              <div>
                <p className="label">full name</p>
                <p className="detail">Grace Effiom</p>
              </div>
              <div className="second">
                <p className="label">phone number</p>
                <p className="detail">07060780922</p>
              </div>
            </div>
            <div>
              <div>
                <p className="label">full name</p>
                <p className="detail">Grace Effiom</p>
              </div>
              <div className="second">
                <p className="label">phone number</p>
                <p className="detail">07060780922</p>
              </div>
            </div>
            <div>
              <div>
                <p className="label">full name</p>
                <p className="detail">Grace Effiom</p>
              </div>
            </div>
            <div>
              <div>
                <p className="label">full name</p>
                <p className="detail">Grace Effiom</p>
              </div>
            </div>
          </div>
        </div>
        <div className="personinfo__container">
          <p className="title">Socials</p>
          <div className="first__row">
            <div>
              <div>
                <p className="label">Level of Education</p>
                <p className="detail">B.Sc</p>
              </div>
            </div>
            <div>
              <div>
                <p className="label">full name</p>
                <p className="detail">Grace Effiom</p>
              </div>
            </div>
            <div>
              <div>
                <p className="label">full name</p>
                <p className="detail">Grace Effiom</p>
              </div>
            </div>
          </div>
        </div>
        <div className="personinfo__container">
          <p className="title">Guarantor</p>
          <div className="first__row">
            <div>
              <div>
                <p className="label">Level of Education</p>
                <p className="detail">B.Sc</p>
              </div>
            </div>
            <div>
              <div>
                <p className="label">full name</p>
                <p className="detail">Grace Effiom</p>
              </div>
            </div>
            <div>
              <div>
                <p className="label">full name</p>
                <p className="detail">Grace Effiom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default UserDetail;
