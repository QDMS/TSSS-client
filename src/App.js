import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//components
import TopNav from "./components/TopNav";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./booking/Home";
import Dashboard from "./user/Dashboard";
import DashboardServicer from "./user/DashboardServicer";




function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/dashboard/servicer" component={DashboardServicer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
