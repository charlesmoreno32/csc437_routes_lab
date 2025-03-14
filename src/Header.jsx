import "./Header.css";
import { Link } from "react-router";

export function Header({ authToken, setAuthToken }) {
  function handleClick(event) {
    setAuthToken("");
  }

  return (
    <header>
      <h1>My cool site</h1>
      {authToken !== "" && <button onClick={handleClick}> Logout </button>}
      <div>
        <label>
          Some switch (dark mode?) <input type="checkbox" />
        </label>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/images">Image Gallery</Link>
          <Link to="/account">Account</Link>
        </nav>
      </div>
    </header>
  );
}
