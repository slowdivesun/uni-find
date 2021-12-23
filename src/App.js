import './App.css';
import Find from './Components/find/find';
import {  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Details from './pages/details/details';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Find/>
        </Route>
        <Route path="/details" >
          <Details/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
