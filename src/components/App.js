import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../containers/Home';
import AddMore from '../containers/AddMore';
const App = () => (
  <Router>
    <Switch>
          <Route path="/todos">
             <AddTodo />
            <VisibleTodoList />
            <Footer />
            <Link to={'/home'} >link</Link>
          </Route>
          <Route path="/home">
           <AddTodo />
            <Footer />
            <Link to={'/todos'} >link</Link>
          </Route>
          <Route path="/add-more">
            <AddMore></AddMore>
            <Link to={'/todos'} >link</Link>
          </Route>
    </Switch>
  </Router>
)

export default App
