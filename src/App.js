import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Summary from './pages/summary';
import Nav from './components/nav';

function App() {
  return (
      <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path=":imdbID" element={<Summary />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
