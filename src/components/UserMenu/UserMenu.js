import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./default.jpg";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;
  return (
    <>
      <div className="user__menu">
        <img className="user__img user__item" src={avatar} alt="" />

        <div className="user__box">
          <span className="user__welcome user__item">Welcome, {name}</span>
          <Button
            variant="outline-primary"
            type="button"
            onClick={() => dispatch(authOperations.logOut())}
            className="user__btn"
          >
            Log out
          </Button>
        </div>
      </div>
    </>
  );
}
