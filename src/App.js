import './App.css';
import React, {useState} from 'react';
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {
  const pages = [ <About/>, <Projects/>, <Contact/>, <Resume/>];
  const [page, setPage] = useState(pages[0])
  return (
    <div className="App">
      <NavBar pages = {pages} setPage = {setPage}/>
      {page}
    <div className="App">
    </div>
    </div>
  );
}

export default App;
