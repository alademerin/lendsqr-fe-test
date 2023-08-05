import NavBar from "../../components/NavBar/NavBar";
import BackArrow from "../../assets/back.svg";

const UserDetail = () => {
  return (
    <NavBar>
      <div>
        <img src={BackArrow} />
        <p>Back to Users</p>
      </div>
    </NavBar>
  );
};

export default UserDetail;
