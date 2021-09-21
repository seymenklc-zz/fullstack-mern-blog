import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Home from './components/Home/Home';
import CreatePost from './components/CreatePost/CreatePost';
import CreateUser from './components/CreateUser/CreateUser';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={CreateUser} />
        <Route exact path='/register' component={CreateUser} />
        <Route exact path='/createPost' component={CreatePost} />
      </Switch>
      {/* Redirect user to home route when the page first load */}
      <Redirect to='/home' />
    </>
  );
};

export default App;
