import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Summary from './pages/summary';

function App() {
  return (
      <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path=":imdbID" element={<Summary />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
