import './App.css';
import Welcome from './components/Welcome';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './AppLoyout';
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
