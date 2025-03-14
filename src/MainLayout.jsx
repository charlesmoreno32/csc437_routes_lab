import { Header } from "./Header.jsx";
import { Outlet } from "react-router";

export function MainLayout({ authToken, setAuthToken }) {
  return (
    <div>
      <Header authToken={authToken} setAuthToken={setAuthToken} />
      <div style={{ padding: "0 2em" }}>
        <Outlet />
      </div>
    </div>
  );
}
