import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetail from './Components/PostDetail/PostDetail';
import NoMatch from './Components/NoMatch/NoMatch';
import PostComment from './Components/PostComment/PostComment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/postDetail">
              <PostDetail />
            </Route>

            <Route path="/post/:postDetail">
              <PostDetail />
            </Route>

            <Route path="/comment/:postComment">
              <PostComment />
            </Route>

            <Route exact path="*">
              <NoMatch />
            </Route>
           
          </Switch>
        </Router>
      </header>
     
    </div>
  );
}

export default App;
