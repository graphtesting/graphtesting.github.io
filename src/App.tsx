import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard, Login, Register, Reset } from './components';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
