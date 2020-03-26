import React from 'react';
import { createGlobalStyle } from 'styled-components';
import simplonmonoBoldTwo from './assets/fonts/simplonmono-bold.woff2';
import simplonmonoBold from './assets/fonts/simplonmono-bold.woff';
import simplonmonoLightTwo from './assets/fonts/simplonmono-light.woff2';
import simplonmonoLight from './assets/fonts/simplonmono-light.woff';
import simplonmonoMediumTwo from './assets/fonts/simplonmono-medium.woff2';
import simplonmonoMedium from './assets/fonts/simplonmono-medium.woff';
import simplonmonoRegularTwo from './assets/fonts/simplonmono-regular.woff2';
import simplonmonoRegular from './assets/fonts/simplonmono-regular.woff';
import simplonnormBoldTwo from './assets/fonts/simplonnorm-bold.woff2';
import simplonnormBold from './assets/fonts/simplonnorm-bold.woff';
import simplonnormLightTwo from './assets/fonts/simplonnorm-light.woff2';
import simplonnormLight from './assets/fonts/simplonnorm-light.woff';
import simplonnormMediumTwo from './assets/fonts/simplonnorm-medium.woff2';
import simplonnormMedium from './assets/fonts/simplonnorm-medium.woff';
import simplonnormRegularTwo from './assets/fonts/simplonnorm-regular.woff2';
import simplonnormRegular from './assets/fonts/simplonnorm-regular.woff';
import history from "./utils/history";
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddMore from './containers/AddMore';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'simplonmono-bold';
    font-style: normal;
    font-weight: normal;
    src:
      url('${simplonmonoBoldTwo}') format('woff2'),
      url('${simplonmonoBold}') format('woff');
  }
  @font-face {
    font-family: 'simplonmono-light';
    font-style: normal;
    font-weight: normal;
    src:
      url('${simplonmonoLightTwo}') format('woff2'),
      url('${simplonmonoLight}') format('woff');
  }
  @font-face {
    font-family: 'simplonmono-medium';
    font-style: normal;
    font-weight: normal;
    src:
      url('${simplonmonoMediumTwo}') format('woff2'),
      url('${simplonmonoMedium}') format('woff');
  }
  @font-face {
    font-family: 'simplonmono-regular';
    font-style: normal;
    font-weight: normal;
    src:
      url('${simplonmonoRegularTwo}') format('woff2'),
      url('${simplonmonoRegular}') format('woff');
  }
  @font-face {
    font-family: 'simplonnorm-bold';
    font-style: normal;
    font-weight: normal;
    src:
      url('${simplonnormBoldTwo}') format('woff2'),
      url('${simplonnormBold}') format('woff');
  }
  @font-face {
    font-family: 'simplonnorm-light';
    font-style: normal;
    font-weight: normal;
    src:
      url('${simplonnormLightTwo}') format('woff2'),
      url('${simplonnormLight}') format('woff');
  }
  @font-face {
    font-family: 'simplonnorm-medium';
    font-style: normal;
    font-weight: normal;
    src:
      url('${simplonnormMediumTwo}') format('woff2'),
      url('${simplonnormMedium}') format('woff');
  }
  @font-face {
    font-family: 'simplonnormRegular';
    font-style: normal;
    font-weight: normal;
    src:
      url('${simplonnormRegularTwo}') format('woff2'),
      url('${simplonnormRegular}') format('woff');
  }
  @font-face {
    font-family: 'simplonnormRegular';
    font-style: normal;
    font-weight: normal;
    src:
      url('${simplonnormRegularTwo}') format('woff2'),
      url('${simplonnormRegular}') format('woff');
  }
  html, body {
    font-family: 'simplonnormRegular';
    font-size: 14px;
    font-weight: normal;
  }
`;

const App = () => (
    <Router history={history}>
        <GlobalStyle></GlobalStyle>
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