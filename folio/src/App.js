import './App.css';
import Home from './components/Home.js'
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import About from './components/About.js';
import Process from './components/Process.js';
import Work from './components/Work.js'
import Contact from './components/Contact.js';
import Exhibitions from './components/Exhibitions.js';
import ScrollToTop from './components/ScrollToTop.js'



function App() {



  return (
      <>
        <div className="App">
          <ScrollToTop/>
          <Switch>
            <Route path="/" exact >
              <Home/>
            </Route>
            <Route path="/about" exact>
              <About/>
            </Route>
            <Route path="/work" exact>
              <Work/>
            </Route>
            <Route path="/process" exact>
              <Process/>
            </Route>
              <Route path="/exhibitions" exact>
              <Exhibitions/>
            </Route>
            <Route path="/contact" exact>
              <Contact/>
            </Route>
          </Switch>
        </div>
      </>
  );
}

export default App;


