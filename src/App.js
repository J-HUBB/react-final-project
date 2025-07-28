import Home from './pages/home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
