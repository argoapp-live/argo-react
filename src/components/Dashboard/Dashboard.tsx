import React from "react";
import "./Dashboard.scss";
import { Header } from "./components";
import { Route } from "react-router-dom";
import { Members, Overview, Settings } from "./routes";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Header />
      <main className="app-main">
        <div className="home-container">
          <Route path="/dashboard/overview" exact render={() => <Overview />} />
          <Route path="/dashboard/settings" exact render={() => <Settings />} />
          <Route path="/dashboard/members" exact render={() => <Members />} />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
