import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
