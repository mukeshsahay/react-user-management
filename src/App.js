
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import UserAdd from "./components/UserAdd";
import UserUpdate from "./components/UserUpdate";

function App() {
  return (
    <div>
      <Menu />
      <br />
      <div className="container">
        {/* <Header /><br /> */}
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/home" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/users" Component={Users} />
          <Route exact path="/add-user" Component={UserAdd} />
          <Route exact path="/user-detail/:id" Component={UserDetail} />
          <Route exact path="/update-user/:id" Component={UserUpdate} />
        </Routes><br />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;