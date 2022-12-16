import Home from '../src/pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;