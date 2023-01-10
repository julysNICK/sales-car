import './App.css';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/authenticator" element={<LoginPage />} />
    </Routes>
  );
}

function HomeScreen() {
  console.log('HomeScreen');
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
