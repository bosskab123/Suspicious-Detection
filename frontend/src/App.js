import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { UserContext } from './contexts/UserContext';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AnalyseVideo from './pages/AnalyseVideo';

function App() {
  
  const [user, setUser] = useState({id: null, img: null, subscription: 'none'});

  const value = useMemo(() => ({user,setUser}), [user,setUser]);

  return (
    <div className="App">
      <UserContext.Provider value = {value}>
        <Navbar />
        <Switch>
          <Route path='/' exact={true}>
            <Home />
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
          <Route path='/analyse'>
            <AnalyseVideo />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
