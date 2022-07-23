import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { publicRoute } from './routes/PublicRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Navbar>
      <Routes>
        {
          publicRoute.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
        }
      </Routes>
    </Navbar>
  );
}

export default App;
