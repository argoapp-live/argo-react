import React from "react";
import "./UserSettings.scss";
import { SettingsGeneral } from "./routes";
import { Route, useHistory, useLocation } from "react-router-dom";

const RootHeader = React.lazy(() => import("../SharedComponents/RootHeader"));
const UserDetailsCard = React.lazy(() => import("./components/UserDetailsCard"));

function UserSettings() {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="UserSettings">
      <RootHeader parent={"UserSettings"} />
      <main className="app-main">
        <div className="user-settings-container">
          <UserDetailsCard />
          <div className="settings-container">
            <div className="settings-left-side-bar">
              <div
                className={`settings-bar-item ${
                  location.pathname.indexOf("general") !== -1 ? "selected" : ""
                }`}
                onClick={(e) => history.push("/user/settings/general")}
              >
                General
              </div>
            </div>
            <Route
              path="/user/settings/general"
              exact
              render={() => <SettingsGeneral />}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserSettings;
