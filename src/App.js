import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { publicRoute } from './routes/PublicRoute';

function App() {
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
