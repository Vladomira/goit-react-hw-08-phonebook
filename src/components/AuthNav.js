import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact>
        Register
      </NavLink>

      <NavLink to="/login" exact>
        Log in
      </NavLink>
    </div>
  );
}
