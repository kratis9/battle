import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Battle from "./components/Battle";
import Popular from "./components/Popular";
import Results from "./components/Results";
import { ThemeProvider } from "./context/Theme";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light"
        }));
      }
    };
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <Route exact path="/" component={Popular} />
              <Route exact  path="/battle" component={Battle} />
              <Route path="/battle/results" component={Results}></Route>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
