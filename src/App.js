
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendInfo from './components/FriendInfo/FriendInfo';


function App() {
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/">
              <Home/>
          </Route>

          <Route path="/about/:friendId">
              <FriendInfo/>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
       
    </div>
  );
}

export default App;
