import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Hello from "./components/Hello/Hello";
import Noticia from "./components/Noticia/Noticia";
import ElevateAppBar from "./components/ElevateAppBar/ElevateAppBar";

function App() {
    return (
        <Router>
            <ElevateAppBar/>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/hello" />
                    </Route>
                    <Route exact path="/hello">
                        <Hello/>
                    </Route>
                    <Route exact path="/news">
                        <Noticia/>
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
