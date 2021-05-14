import { Route,Switch } from 'react-router-dom';

import Pricing from './pages/Pricing';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact={true}>
          Suspicious detection is a web service storing your home's visitant secretly in our dadtabase and notify you whenever any suspicious person or suspicious behaviour like climbing a tree, lay down on your garage which might be a danger to you.
        </Route>
        <Route path='/pricing'>
          <Pricing />
        </Route>
        <Route path='/product'>
          <Product />
        </Route>
        <Route path='/aboutus'>
          <AboutUs />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
