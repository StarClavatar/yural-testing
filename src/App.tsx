import "./App.css";
import MainPageLayout from "./Layouts/MainPageLayout";
import AnaloguesTable from "./components/AnaloguesTable/AnaloguesTable";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <div className="block-1">
          <Router>
            <Header />
            <Nav />
            <Switch>
              <Route exact path="/" component={MainPageLayout} />
              <Route exact path="/search/:number" component={Search} />
              <Route path="/brands/:brand/:number" component={AnaloguesTable} />
            </Switch>
          </Router>
      </div>
    </div>
  );
}

export default App;
