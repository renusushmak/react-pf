import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'


function App() {
  const pages = [ <About/>, <Projects/>, <Contact/>];
  const [page, setPage] = useState(pages[0])
  return (
    <div className="App">
      <NavBar pages = {pages} setPage = {setPage}/>
      {page}
    </div>
  );
}

export default App;
