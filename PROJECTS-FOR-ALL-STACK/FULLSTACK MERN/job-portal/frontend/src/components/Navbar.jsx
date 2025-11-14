import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Job Portal</Link>

        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {!user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            )}

            {user && user.role === "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/add-job">Post Job</Link>
              </li>
            )}

            {user && (
              <li className="nav-item">
                <span className="nav-link">
                  Welcome, <strong>{user.name}</strong>
                </span>
              </li>
            )}

            {user && (
              <li className="nav-item">
                <button className="btn btn-light btn-sm ms-2"
                  onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
