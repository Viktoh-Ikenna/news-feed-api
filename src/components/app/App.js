import React, { useState ,useContext} from "react";
import DeskFooter from "../DeskFooter/deskFooter";
import DeskNav from "../deskNav/deskNav";
import { DesktopHome } from "../desktop/deskhome/desktopHome";
import { ArticlePage } from "../postArticlePage/ArticlePage";
import { PostListingPages } from "../PostListingPages/postListingPages";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import {observer} from 'mobx-react'
import { ThemeContext } from "../..";


const App=observer((props)=> {

const store = useContext(ThemeContext);

  return (
    
    <Router>
      <div className="App">
        <DeskNav />
        <div className="pageBody">
          <div className="placements"></div>
          {store.name}
          <Switch>
            <Route exact path="/">
              <DesktopHome />
            </Route>
            <Route path='/posts/:country'>
              <PostListingPages />
            </Route>
            <Route path='/article/:country/:id'>
              <ArticlePage />
            </Route>
            <Route path='*'>
              <div>404 bro</div>
            </Route>
          </Switch>
        </div>
        <DeskFooter />
      </div>
    </Router>
  );
})

export default App;
