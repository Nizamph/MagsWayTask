import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import JoinUsPage from './components/JoinUs';
function App() {
  return (
    <div className='w-full h-screen flex justify-stretch'>
      <Welcome />
      <JoinUsPage />
    </div>
  );
}

export default App;
