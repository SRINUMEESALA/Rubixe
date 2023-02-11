import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css"
import Home from "./components/Home.js";
import NotFound from "./components/NotFound";





document.title = "Rubixe";

const App = () => <>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
</>


export default App




