import './App.css';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import DetailsCar from './pages/DetailsCar';
import OauthNix from './pages/oAuthNix';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/authenticator" element={<LoginPage />} />
      <Route path="/detailsCar/:id" element={<DetailsCar />} />
      <Route path="/oauthNix" element={<OauthNix />} />
      <Route path="*" element={<h1>404 - Not Found!</h1>} />
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
