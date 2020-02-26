import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style/App.css';
import UsersList from './components/user/UsersList';
import ArticlesList from './components/article/ArticlesList';
import Clock from './components/clock/clock';
import Navbar from './components/navbar/navbar';
import AddUserForm from './components/add_user_form/AddUserForm';
import LoginPage from './components/login/login';
// import Music from './components/background/audio';
import Video from './components/video/videoPlayer';


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
      {/* <Clock />   */}
      <div className="log-buttons">
      <div className="navbar_btn navbar_btn__LEFT" ><Link to='/login' className="navbar_btn"><i class="fas fa-user-plus"></i><label>login</label></Link></div>
      <div className="navbar_btn navbar_btn__LEFT" ><Link to='/signup' className="navbar_btn"><i class="fas fa-user-plus"></i><label>signup</label></Link></div>
      <div className="navbar_btn navbar_btn__LEFT" ><Link to='/users' className="navbar_btn"><i class="fas fa-users"></i><label>all user</label></Link></div>

      </div>
      {/* <Music /> */}
      </header>
        <div>
      <Switch>
              <Route exactly path='/articles' component={ArticlesList} />
              <Route exactly path='/users' component={UsersList} />
              <Route exactly path='/login' component={LoginPage} />
              <Route exactly path='/signup' component={AddUserForm} />
              <Route exactly path='/video' component={Video} />
        </Switch>
        <div className="navbar">
            <div className="navbar_btn navbar_btn__LEFT" ><Link to='/articles' className="navbar_btn nav"><i class="fas fa-newspaper"></i><label>news</label></Link></div>
            <div className="navbar_btn navbar_btn__LEFT" ><Link to='/videos' className="navbar_btn nav"><i class="fas fa-video"></i><label>videos</label></Link></div>
        </div>
        {/* <Navbar /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;





