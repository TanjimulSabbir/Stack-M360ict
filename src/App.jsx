import './App.css'
import useLoggedInCheck from './components/hooks/useLoggedInCheck';
import Navbar from './components/shared/Navbar';
import Layout from './layout/Layout';

function App() {
  useLoggedInCheck()
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Layout />
    </div>
  )
}

export default App;
